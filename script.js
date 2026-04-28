document.addEventListener('DOMContentLoaded', () => {
  
  // --- Elements ---
  const authView = document.getElementById('auth-view');
  const dashboardView = document.getElementById('dashboard-view');
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username-input');
  const userDisplay = document.getElementById('user-display');
  const themeToggle = document.getElementById('theme-toggle');

  const aqiVal = document.getElementById('aqi-val');
  const aqiStatus = document.getElementById('aqi-status');
  const aqiGlow = document.getElementById('aqi-glow');
  
  const humidityVal = document.getElementById('humidity-val');
  const moistureVal = document.getElementById('moisture-val');
  const tempVal = document.getElementById('temp-val');
  
  const purifierStatus = document.getElementById('purifier-status');
  const purifierToggle = document.getElementById('purifier-toggle');

  // --- Theme Logic ---
  // Check local storage or set default to light mode
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    // Update chart colors if initialized
    if (chartInstance) {
      updateChartColors();
    }
  });

  // --- Authentication Logic ---
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = usernameInput.value;
    userDisplay.textContent = name;
    
    authView.classList.remove('active');
    setTimeout(() => {
      authView.classList.add('hidden');
      dashboardView.classList.remove('hidden');
      void dashboardView.offsetWidth; // trigger reflow
      dashboardView.classList.add('active');
      
      initDashboard();
    }, 500);
  });

  // --- Dashboard Logic ---
  let chartInstance = null;
  let dataInterval = null;
  const timeLabels = [];
  const aqiData = [];
  const MAX_DATA_POINTS = 15;

  function initDashboard() {
    initChart();
    fetchSensorData();
    dataInterval = setInterval(fetchSensorData, 3000);
  }

  function getChartColors() {
    const isDark = document.body.classList.contains('dark-mode');
    return {
      textColor: isDark ? '#a0a0a0' : '#8b95a5',
      gridColor: isDark ? '#333333' : '#e2e8f0',
      lineColor: isDark ? '#ffffff' : '#111111'
    };
  }

  function initChart() {
    const ctx = document.getElementById('aqiChart').getContext('2d');
    const colors = getChartColors();
    
    // Gradient
    let gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)'); // Purple
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)'); // Blue

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [{
          label: 'AQI',
          data: aqiData,
          borderColor: colors.lineColor,
          backgroundColor: gradient,
          borderWidth: 3,
          pointBackgroundColor: colors.lineColor,
          pointBorderColor: 'transparent',
          pointRadius: 0, // hide points for cleaner look
          pointHoverRadius: 6,
          fill: true,
          tension: 0.5 // very smooth curves
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: colors.textColor, font: { family: 'Poppins' } }
          },
          y: {
            grid: { color: colors.gridColor, drawBorder: false },
            ticks: { color: colors.textColor, stepSize: 50, font: { family: 'Poppins' } },
            suggestedMin: 0,
            suggestedMax: 200
          }
        },
        animation: { duration: 400 }
      }
    });
  }

  function updateChartColors() {
    const colors = getChartColors();
    chartInstance.data.datasets[0].borderColor = colors.lineColor;
    chartInstance.options.scales.x.ticks.color = colors.textColor;
    chartInstance.options.scales.y.ticks.color = colors.textColor;
    chartInstance.options.scales.y.grid.color = colors.gridColor;
    chartInstance.update();
  }

  function fetchSensorData() {
    let lastAqi = aqiData.length > 0 ? aqiData[aqiData.length - 1] : 45;
    let fakeAQI = Math.max(10, Math.min(300, lastAqi + (Math.random() * 20 - 10)));
    fakeAQI = Math.round(fakeAQI);

    const fakeHumidity = Math.floor(40 + Math.random() * 5); 
    const fakeMoisture = Math.floor(30 + Math.random() * 5); 
    const fakeTemp = Math.floor(22 + Math.random() * 3); 
    
    updateUI(fakeHumidity, fakeAQI, fakeMoisture, fakeTemp);
    updateChart(fakeAQI);
  }

  function updateUI(humidity, aqi, moisture, temp) {
    animateValue(humidityVal, parseInt(humidityVal.innerText) || 0, humidity, 500);
    animateValue(aqiVal, parseInt(aqiVal.innerText) || 0, aqi, 500);
    animateValue(moistureVal, parseInt(moistureVal.innerText) || 0, moisture, 500);
    animateValue(tempVal, parseInt(tempVal.innerText) || 0, temp, 500);

    // Update glowing sphere color based on AQI
    let colors = '';
    if (aqi <= 50) {
      aqiStatus.innerHTML = 'Good Air Quality';
      colors = '#10b981, #3b82f6'; // Green to blue
    } else if (aqi <= 100) {
      aqiStatus.innerHTML = 'Moderate Air Quality';
      colors = '#f59e0b, #ef4444'; // Yellow to red
      
      // Auto-turn on purifier if not already
      if (!purifierToggle.checked) {
        purifierToggle.checked = true;
        purifierStatus.innerHTML = "Active";
      }
    } else {
      aqiStatus.innerHTML = 'Poor Air Quality';
      colors = '#ef4444, #7f1d1d'; // Red to dark red
      if (!purifierToggle.checked) {
        purifierToggle.checked = true;
        purifierStatus.innerHTML = "High Power";
      }
    }
    aqiGlow.style.background = `radial-gradient(circle at 30% 30%, ${colors.split(',')[0]}, ${colors.split(',')[1]})`;
  }

  // Purifier toggle logic
  purifierToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      purifierStatus.innerHTML = "Active";
    } else {
      purifierStatus.innerHTML = "Standby";
    }
  });

  function updateChart(newAqi) {
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    timeLabels.push(timeString);
    aqiData.push(newAqi);

    if (timeLabels.length > MAX_DATA_POINTS) {
      timeLabels.shift();
      aqiData.shift();
    }
    chartInstance.update();
  }

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

});
