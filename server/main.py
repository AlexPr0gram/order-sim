from flask import Flask, jsonify
from flask_cors import CORS
import json
import sqlite3
import os

app = Flask(__name__)
CORS(app)  # 🔥 Разрешаем CORS для всех путей
DATABASE = os.path.join(os.path.dirname(__file__), 'database.db')

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row  # для работы с dict-подобным выводом
    return g.db

def init_db():
    """Инициализация базы данных, если её нет"""
    if not os.path.exists(DATABASE):
        db = get_db()
        with open('schema.sql', mode='r') as f:
            db.executescript(f.read())
        print("База данных инициализирована.")
    else:
        print("База данных уже существует.")

@app.before_first_request
def initialize_db():
    """Автоматически вызывается перед первым запросом"""
    init_db()
    
@app.route('/hello')
def hello():
    return jsonify({'message': 'Привет от Flask!'})

@app.route('/getList', methods=['POST'])
def getList():
    print('hello world')
    with open('mockData.json', 'r', encoding='utf-8') as file:
        return json.load(file)

if __name__ == '__main__':
    app.run(port=5000)