#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <PubSubClient.h>


#define WATER_SENSOR_PIN 36  
#define BUZZER_PIN 13

#define GREEN_LED 25
#define YELLOW_LED 26
#define RED_LED 27

LiquidCrystal_I2C lcd(0x27, 20, 4);  

String sensorID = "Rua Moises";


const char* ssid = "Wokwi-GUEST";
const char* password = "";  
const char* mqttServer = "test.mosquitto.org"; 
const int mqttPort = 1883;
const char* mqttTopic = "flood-monitor/data";

WiFiClient espClient;
PubSubClient client(espClient);


void setup() {
  Serial.begin(115200);

  
  pinMode(WATER_SENSOR_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  
  lcd.init();
  lcd.backlight();

  
  WiFi.begin(ssid, password);
  Serial.print("Conectando ao Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWi-Fi conectado!");

  
  client.setServer(mqttServer, mqttPort);
  while (!client.connected()) {
    Serial.println("Conectando ao broker MQTT...");
    if (client.connect("ESP32Client")) {
      Serial.println("Conectado ao MQTT!");
    } else {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      delay(2000);
    }
  }
}


void loop() {
  int waterLevel = analogRead(WATER_SENSOR_PIN);

  
  float level_cm = map(waterLevel, 0, 4095, 0, 30); 
  int percent = map(waterLevel, 0, 4095, 0, 100);

  lcd.clear();

  
  lcd.setCursor(0, 0);
  lcd.print("Flood Monitor");

  
  lcd.setCursor(0, 1);
  lcd.print("Location: ");
  lcd.print(sensorID);

  
  lcd.setCursor(0, 2);
  lcd.print("Level: ");
  lcd.print(level_cm, 1);  
  lcd.print(" cm        ");

  
  String risk = "";
  if (percent < 30) {
    risk = "LOW";
  } else if (percent < 70) {
    risk = "MEDIUM";
  } else {
    risk = "HIGH";
  }

  setRiskLevel(risk);
  lcd.setCursor(0, 3);
  lcd.print("Risk: " + risk);

  delay(5000);

  String json = "{\"location\":\"" + sensorID + "\",\"level_cm\":" + String(level_cm, 1) + ",\"risk\":\"" + risk + "\"}";
  Serial.println(json);

 
  if (client.connected()) {
    client.publish(mqttTopic, json.c_str());
  } else {
    Serial.println("MQTT desconectado, tentando reconectar...");
    client.connect("ESP32Client");
  }

  client.loop();
  delay(5000);

}

void setRiskLevel(String level) {
  if (level == "LOW") {
    digitalWrite(GREEN_LED, HIGH);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, LOW);
    digitalWrite(BUZZER_PIN, LOW);
  } else if (level == "MEDIUM") {
    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, HIGH);
    digitalWrite(RED_LED, LOW);
    digitalWrite(BUZZER_PIN, LOW);
  } else if (level == "HIGH") {
    digitalWrite(GREEN_LED, LOW);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED, HIGH);
    tone(BUZZER_PIN, 1000);  
    delay(500);
    noTone(BUZZER_PIN);
  }
}
