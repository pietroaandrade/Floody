// esp32_mqtt_bridge.ino

#include <WiFi.h>
#include <PubSubClient.h>
#include <time.h>

#define RXD2 16 
#define TXD2 17 

const char* ssid = "Casa Brandalise 5G";          
const char* password = "Lfa001181";  
const char* mqtt_server = "test.mosquitto.org";
const char* sensor_id = "lamp_post_001";

WiFiClient espClient;
PubSubClient client(espClient);

String incoming = "";

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2);

  connectToWiFi();
  client.setServer(mqtt_server, 1883);

  configTime(0, 0, "pool.ntp.org"); 

  while (!client.connected()) {
    reconnectMQTT();
  }
}

void loop() {
  client.loop();
  readAndSendSensorData();
}

void connectToWiFi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}

void reconnectMQTT() {
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT");
    } else {
      delay(1000);
    }
  }
}

void readAndSendSensorData() {
  while (Serial2.available()) {
    char c = Serial2.read();
    if (c == '\n') {
      int waterLevel = incoming.toInt();

      time_t now;
      time(&now);
      struct tm* timeinfo = localtime(&now);
      char timestamp[25];
      strftime(timestamp, sizeof(timestamp), "%Y-%m-%dT%H:%M:%S", timeinfo);

      String payload = "{";
      payload += "\"sensor_id\":\"" + String(sensor_id) + "\",";
      payload += "\"timestamp\":\"" + String(timestamp) + "\",";
      payload += "\"water_level\":" + String(waterLevel);
      payload += "}";

      client.publish("flood/city/waterlevel", payload.c_str());

      Serial.println("Published: " + payload);
      incoming = "";
    } else {
      incoming += c;
    }
  }
}


//MQTT TOPIC: flood/city/waterlevel --> Filtrar por ID do sensor
