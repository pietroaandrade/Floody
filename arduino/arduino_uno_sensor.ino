

const int sensorPin = A0;
unsigned long lastSent = 0;
const unsigned long interval = 10000; 

void setup() {
  Serial.begin(9600); 
  pinMode(sensorPin, INPUT);
}

void loop() {
  if (millis() - lastSent > interval) {
    int waterLevel = analogRead(sensorPin);
    Serial.println(waterLevel); 
    lastSent = millis();
  }
}
