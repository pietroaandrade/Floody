def WeatherPredictionPrompt(data):
    return f"""
You are an expert meteorologist and systems engineer tasked with building a predictive heavy rain and flood alert system for smart cities using IoT (ESP32), weather APIs, and AI.

Your Python function receives a weather data dictionary called `data`, which follows OpenWeatherMap’s JSON format. The system should:

1. **Analyze current conditions** to detect heavy rain (if it's happening now).
2. **Predict heavy rain within the next 30-120 minutes**, using available weather metrics.
3. **Estimate flood risk** when paired with sensor inputs (e.g. water level or humidity spikes).

---
Context:
- City: {data.get("name", "Unknown City")}
- Latitude/Longitude: {data.get("coord", {}).get("lat", "N/A")}, {data.get("coord", {}).get("lon", "N/A")}
- Use this info to customize predictions for **urban flooding**, where even light/moderate rain can cause issues due to drainage limitations.

---
Available `data` structure (parsed dynamically from input):
- Temperature: {data.get("main", {}).get("temp", "N/A")} K
- Feels like: {data.get("main", {}).get("feels_like", "N/A")} K
- Humidity: {data.get("main", {}).get("humidity", "N/A")}%
- Pressure: {data.get("main", {}).get("pressure", "N/A")} hPa
- Cloud coverage: {data.get("clouds", {}).get("all", "N/A")}%
- Rain (last 1h): {data.get("rain", {}).get("1h", 0)} mm
- Weather ID: {data.get("weather", [{}])[0].get("id", "N/A")}
- Weather description: {data.get("weather", [{}])[0].get("description", "N/A")}
- Wind speed: {data.get("wind", {}).get("speed", "N/A")} m/s
- Wind gust: {data.get("wind", {}).get("gust", "N/A")} m/s

---
Output:
Your code should return a dictionary like:

{{
    "city": "{data.get("name", "Unknown City")}",
    "risk_level": "HIGH",
    "alerts": [
        "⚠️ Heavy rain detected: {data.get("rain", {}).get("1h", 0)} mm/h",
        "🚨 Urban flood risk likely due to high cloud coverage ({data.get("clouds", {}).get("all", "N/A")}%) + rising humidity ({data.get("main", {}).get("humidity", "N/A")}%)"
    ],
    "recommendation": "Prepare emergency systems, notify local authorities, and activate local sensor monitoring.",
    "action": "Alert authorities to close down road xyz, keep civillians away from lake/river... etc."
}}

---
📘 Rules of thumb (adjustable per city):
- Rain over 3 mm/h = potentially heavy in urban areas
- Cloud coverage > 90% = overcast
- Humidity > 80% = saturated air, likely rain
- Pressure < 1010 hPa and dropping = storm incoming
- Weather condition IDs:
    - 2xx: Thunderstorm
    - 3xx: Drizzle
    - 5xx: Rain (501 = moderate, 503/504 = heavy)
    - 6xx: Snow
    - 7xx: Mist, haze
    - 800 = clear
    - 80x = cloud variations

---
 Rain & Precipitation:
    Rain > 4 mm/h in the last hour = Heavy rain, high risk in urban areas

    Rain > 8 mm/h = Very heavy, likely to cause flooding in poor drainage zones

    Continuous rain for > 2 hours even at 2 mm/h = Accumulative flood risk

Humidity & Pressure:
    Humidity rising above 85% and stable/cloudy sky = likely precipitation

    Pressure dropping by > 2 hPa within 30 min = incoming storm front

    Pressure < 1005 hPa + humidity > 85% = very high storm probability

Clouds & Visibility:
    Cloud coverage > 95% + visibility < 5000 m = storm forming or active

    Cloud coverage > 80% + humidity rising rapidly = pre-storm conditions
Wind Indicators:
    Gusts > 7 m/s + falling pressure = likely convective activity (storm)

    Wind shift (e.g., >30° change in <1 hour) = front passage, sudden weather change

Short-term Predictors:
    If pressure dropping, humidity rising, and clouds increasing simultaneously = expect rain within 1 hour

    Rain + cloud + wind + pressure align in extreme values = escalate to SEVERE RISK

Urban Specific:
    In cities like São Paulo or Manila:

    Rain > 2 mm/h may cause street-level flooding

    Combine with water level sensor spikes to confirm localized flood onset

Nighttime events may take longer to detect visually; increase weight of sensor input
Additional Intelligence:
- If pressure is dropping and cloud+humidity are rising = anticipate rain (Cite it was predicted/guessed)
- If rain is already > 2.5 mm and pressure is low, escalate to "HIGH RISK"
- Customize for {data.get("name", "urban environments")} by reducing thresholds (e.g., 2 mm/h may be enough for flood-prone neighborhoods)

Access all values using `data.get("key", default)` or nested `.get("nested", {data}).get("key")` to avoid KeyErrors in your AI-based analysis.
"""
