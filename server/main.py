from flask import Flask, jsonify, g
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

def check_tables():
    """Проверка таблиц в базе данных"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    print("Таблицы в базе данных:", tables)

def init_db():
    """Инициализация базы данных, если её нет"""
    if not os.path.exists(DATABASE):
        print(f"Базы данных нет. Создаем новую... Путь: {DATABASE}")
        try:
            db = get_db()
            with open('schema.sql', mode='r') as f:
                print("Чтение schema.sql...")
                db.executescript(f.read())
            print("База данных инициализирована.")
            check_tables()  # Проверим, создалась ли таблица
        except Exception as e:
            print(f"Ошибка при создании базы данных: {e}")
    else:
        print("База данных уже существует.")

@app.route('/hello')
def hello():
    return jsonify({'message': 'Привет от Flask!'})

@app.route('/getList', methods=['POST'])
def getList():
    print('hello world')
    with open('mockData.json', 'r', encoding='utf-8') as file:
        return json.load(file)

if __name__ == '__main__':
    init_db()
    app.run(port=5000)
