import { sensors } from './Map';

export function waterLevels() { //Water Level Generator (CM)
    return Math.floor(Math.random() * 50);
}

export function riskInfo(level) { //Water level Analyzer 
    if (level <= 10) return { level: "Low", color: "green" };
    if (level <= 30) return { level: "Medium", color: "yellow" };
    return { level: "High", color: "red" };
}

export function getSensorData() {
    return sensors.map(sensor => {
        const waterLevel = waterLevels();
        const risk = riskInfo(waterLevel);
        
        return {
            location: sensor.geocode,
            waterLevel: waterLevel,
            riskLevel: risk.level,
            riskColor: risk.color,
            address: sensor.address
            
        };
    });
}

export function getHighRiskZones(sensorData) {
    return sensorData.filter(sensor => sensor.riskLevel === "High").length;
}

export function getLatestAlert(sensorData) {
    const highRiskSensors = sensorData.filter(sensor => sensor.riskLevel === "High");
    if (highRiskSensors.length > 0) {
        const latestHighRisk = highRiskSensors[0];
        return {
            message: `High water level detected at ${latestHighRisk.address}: ${latestHighRisk.waterLevel}cm`,
            timestamp: new Date().toLocaleTimeString()
        };
    }
    return {
        message: "No current alerts",
        timestamp: new Date().toLocaleTimeString()
    };
}
