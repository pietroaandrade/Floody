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
            riskColor: risk.color
        };
    });
}
