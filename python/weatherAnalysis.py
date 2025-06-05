from openweather import getWeather
from prompt import WeatherPredictionPrompt

cities = {
    "São Paulo": {"lat": "-23.5475", "lon": "-46.63611"}
}



def weatherAnalysis(city):
    lat = cities[city]["lat"]
    lon = cities[city]["lon"]

    weather_data = getWeather(lat, lon)

    prompt = WeatherPredictionPrompt(weather_data)

    return prompt