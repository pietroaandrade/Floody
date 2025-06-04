#include <Wire.h>
#include <LiquidCrystal_I2C.h>

#define WATER_SENSOR_PIN 36  
#define BUZZER_PIN 13

#define GREEN_LED 25
#define YELLOW_LED 26
#define RED_LED 27

LiquidCrystal_I2C lcd(0x27, 16, 2);  

String sensorID = "Rua Moises";

void setup() {
  Serial.begin(115200);

  pinMode(WATER_SENSOR_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  pinMode(GREEN_LED, OUTPUT);
  pinMode(YELLOW_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);

  lcd.init();
  lcd.backlight();
}

void loop() {
  int waterLevel = analogRead(WATER_SENSOR_PIN);
  int percent = map(waterLevel, 0, 4095, 0, 100);

  lcd.setCursor(0, 0);
  lcd.print("ID: ");
  lcd.print(sensorID);
  lcd.print("       ");

  lcd.setCursor(0, 1);
  lcd.print("Level: ");
  lcd.print(percent);
  lcd.print("%    "); 

  if (percent < 30) {
    setRiskLevel("LOW");
  } else if (percent < 70) {
    setRiskLevel("MEDIUM");
  } else {
    setRiskLevel("HIGH");
  }

  delay(500);
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
