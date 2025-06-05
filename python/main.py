
from openai import OpenAI
import os
from dotenv import load_dotenv
from weatherAnalysis import prompt_data
from weatherAnalysis import weatherAnalysis

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file")

client = OpenAI(api_key=api_key)


city = "São Paulo"  


try:
    data = weatherAnalysis(city) 
    prompt = prompt_data(data) 

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "You are a weather risk prediction AI assistant. You analyze JSON data and output only structured alerts about urban rain and flood risks."
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

""" Expected result (actual result from previous tries):
{
    "city": "São Paulo",
    "risk_level": "LOW",
    "alerts": [
        "Current weather shows mist with humidity at 82% and cloud coverage at 75%.",
        "No rain recorded in the last hour, but humidity is high."
    ],
    "recommendation": "Monitor conditions closely for sudden changes in humidity or pressure.",
    "action": "Continue regular monitoring of weather updates; no immediate action needed."
}

"""