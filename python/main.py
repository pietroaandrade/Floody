
from openai import OpenAI
import os
from dotenv import load_dotenv
from weatherAnalysis import weatherAnalysis

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file")

client = OpenAI(api_key=api_key)


city = "São Paulo"  


try:
    prompt = weatherAnalysis(city)  

    completion = client.chat.completions.create(
        model="gpt-3o-mini",
         messages=[
            {
                "role": "system",
                "content": (
                    "You are a meteorologist and AI risk analyst. Your task is to analyze real-time weather data "
                    "from sensors and APIs, and generate a flood risk prediction for urban environments. "
                    "You will consider rain intensity, humidity, pressure, wind, and other metrics to estimate "
                    "whether a flood is likely in the next 30 to 120 minutes. Format your response with alerts, "
                    "a risk level, and action recommendations."
                )
            },
            {
                "role": "user",
                "content": prompt 
            }
        ]
    )


    print("AI Prediction:")
    print(completion.choices[0].message.content)

except ValueError as Error:
    print(Error)