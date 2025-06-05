import os
from dotenv import load_dotenv
import requests

load_dotenv()
api_key = os.getenv("OPENWEATHER_API_KEY")
if not api_key:
    raise ValueError("OPENWEATHER_API_KEY not found in .env file")


def getWeather(lat, lon, api_key=api_key):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}"
    try:
        r = requests.get(url)
        r.raise_for_status()  
        data = r.json()
        return data
    except requests.exceptions.HTTPError as http_error:
        print(f"HTTP error occurred: {http_error}")
    except requests.exceptions.RequestException as request_error:
        print(f"Request error occurred: {request_error}")
    except ValueError as json_error:
        print(f"JSON parsing error occurred: {json_error}")

#Teste
"""if __name__ == "__main__":
    city = "São Paulo"
    lat = cities[city]["lat"]
    lon = cities[city]["lon"]
    weather_data = getWeather(lat, lon)
    print(weather_data)"""