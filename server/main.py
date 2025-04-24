from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # 🔥 Разрешаем CORS для всех путей

@app.route('/hello')
def hello():
    return jsonify({'message': 'Привет от Flask!'})

@app.route('/getList', methods=['POST'])
def getList():
    with open('mockData.json', 'r', encoding='utf-8') as file:
        return json.load(file)

if __name__ == '__main__':
    app.run(port=5000)