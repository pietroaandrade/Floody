from flask import Flask, request, jsonify
from weatherAnalysis import weatherAnalysis 
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/weather', methods=['GET'])
def get_weather():
    city = "São Paulo"    
    if not city:
        return jsonify({"error": "City is required"}), 400
    
    try:
        weather_data = weatherAnalysis(city) 
        return jsonify(weather_data), 200 
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400  
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)