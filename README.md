
# Project Description:
The Air Quality Monitoring System is a portable device designed to measure various air quality parameters, including particulate matter, volatile organic compounds (VOCs), and carbon dioxide levels. The system aims to provide real-time data on indoor or outdoor air quality, which can be crucial for individuals, especially the elderly and those with respiratory conditions. The device will offer valuable insights into the air quality and help users make informed decisions about their environment.

# Features:
1. Real-Time Data Display: The system will display real-time air quality data, allowing users to track the air quality continuously.
2. Portability: The device will be compact and portable, enabling users to carry it easily to different locations.
3. Integration with Smartphones: The system will have the capability to connect with smartphones, enabling users to access air quality data remotely.
4. Home Automation Integration: The device can integrate with home automation systems to automate actions based on air quality levels.
5. AQI Calculation: The system will calculate the Air Quality Index (AQI) to provide an overall assessment of air quality.
6. Cloud Connectivity: The data collected by the system can be stored and accessed through cloud connectivity, ensuring data availability and security.

# Components Required:
### ESP8266 NodeMCU:
The ESP8266 NodeMCU is a popular development board based on the ESP8266 microcontroller. It features built-in Wi-Fi capabilities, making it suitable for IoT projects. The NodeMCU board provides GPIO pins for connecting external sensors and modules.

![esp](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/c657d01a-79ca-4491-b035-5029ae20b72c)


### MQ135 Air Quality Sensor: 
The MQ135 is a gas sensor that is sensitive to a wide range of harmful gases, including ammonia, nitrogen oxides, benzene, and carbon monoxide. It operates on the principle of conductivity changes in the presence of these gases. The output of the MQ135 sensor can be analog or digital, depending on the specific module used.

![gassensor](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/02783e06-abfa-4ec5-90a6-09adc19b0517)



### DHT11 Temperature and Humidity Sensor:
The DHT11 is a low-cost sensor that provides temperature and humidity measurements. It consists of a capacitive humidity sensor and a thermistor for temperature measurement. The DHT11 sensor provides digital output, making it easy to interface with microcontrollers like the NodeMCU.

![dht](https://github.com/shivamuppal2318/air-quality-monitoring-/assets/156002273/d11046a8-efdb-42dc-83df-c742e937696d)

Here's how these components are typically connected in the hardware setup:

### Power Supply:
The NodeMCU board and sensors require a stable power supply. This can be provided through a USB connection to a computer or a USB power adapter.

# Wiring Connections:

The MQ135 sensor typically has three pins: VCC (power), GND (ground), and OUT (analog or digital output). Connect the VCC pin to a 5V power source, the GND pin to the ground, and the OUT pin to one of the analog or digital pins on the NodeMCU board.
The DHT11 sensor also has three pins: VCC, GND, and DATA. Connect the VCC pin to a 3.3V power source (NodeMCU's 3.3V pin), the GND pin to the ground, and the DATA pin to another digital pin on the NodeMCU board.
Ensure that the power supply can adequately power both sensors and the NodeMCU board simultaneously.

# Benefits:
1. Health Monitoring: The system will help individuals monitor air quality and take necessary precautions for their health.
2. Environmental Awareness: Users can gain insights into the surrounding air quality, contributing to overall environmental awareness.
3. Smart Decision Making: Real-time data will enable users to make informed decisions about indoor and outdoor activities based on air quality conditions.
4. User-Friendly: The system will be designed for easy use and accessibility, catering to individuals of all age groups.
n the project we have used models like RNN(LSTM) for predicting AQI content. RNN stands for
Recurrent Neural Network, and LSTM stands for Long Short-Term Memory. These are types of neural
networks that are great for processing sequential data, like time series data.
Now, let's talk about the other models you mentioned, KNN classifier and SVM. KNN stands for k-
Nearest Neighbors, and it's a simple yet effective algorithm for classification. It works by finding the k
nearest neighbors to a given data point and assigns it to the majority class among those neighbors.
SVM, which stands for Support Vector Machine, is another powerful algorithm used for classification
and regression tasks. It works by finding the best possible hyperplane that separates different classes
in the data. It's great for handling non-linear data and can handle higher-dimensional feature spaces.

# MACHINE LEARNING:
In the project we have used models like RNN(LSTM) for predicting AQI content. RNN stands for
Recurrent Neural Network, and LSTM stands for Long Short-Term Memory. These are types of neural
networks that are great for processing sequential data, like time series data.
Now, let's talk about the other models you mentioned, KNN classifier and SVM. KNN stands for k-
Nearest Neighbors, and it's a simple yet effective algorithm for classification. It works by finding the k
nearest neighbors to a given data point and assigns it to the majority class among those neighbors.
SVM, which stands for Support Vector Machine, is another powerful algorithm used for classification
and regression tasks. It works by finding the best possible hyperplane that separates different classes
in the data. It's great for handling non-linear data and can handle higher-dimensional feature spaces.
Both KNN classifier and SVM have their strengths and weaknesses, and the choice between them
depends on the specific problem and dataset you're working with.
AirQuality Monitoring System
Introduction
Welcome to our AirQuality Monitoring System! This system provides real-time monitoring of air quality factors such as AQI (Air Quality Index), moisture, and humidity. The system includes a web application where users can log in and view the current readings of these factors.

# Features
Real-time Monitoring: The system continuously monitors air quality factors and provides up-to-date readings.
User Authentication: Users can securely log in to the web application to access the monitoring dashboard.
AQI Display: The system calculates and displays the Air Quality Index (AQI) based on the collected data.
Moisture and Humidity: In addition to AQI, the system also tracks moisture and humidity levels.
User-Friendly Interface: The web application features an intuitive interface for easy navigation and data visualization.
Technologies Used
Backend: Python, Flask framework
Frontend: HTML, CSS, JavaScript
Database: SQLite for user authentication
Data Visualization: Charts.js for displaying air quality data
Installation
Clone the repository: git clone https://github.com/your/repository.git
Navigate to the project directory: cd airquality-monitoring-system
Install dependencies: pip install -r requirements.txt
Run the application: python app.py
Access the web application in your browser at http://localhost:5000
Usage
Open your web browser and navigate to the application URL.
If you are a new user, click on the "Sign Up" button to create an account. Otherwise, log in using your credentials.
Once logged in, you will be redirected to the dashboard where you can view the current readings of AQI, moisture, and humidity.
The dashboard also provides visualizations such as charts to display historical data trends.
Contributors

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
We would like to acknowledge the contributions of OpenAQ for providing air quality data APIs that helped in the development of this system.


