import os

from application import app
import csv
import torch
from flask import Blueprint, jsonify, request, send_file
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from application.handle_model.sbert import main
from threading import Thread

from application.handle_model.gpt import gpt_main

model_blueprint = Blueprint('model', __name__)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_name = "ai-forever/sbert_large_nlu_ru"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=5).to(device)
model.load_state_dict(torch.load('application/handle_model/sbert_weights.pt', weights_only=True,
                                 map_location=torch.device('cpu')))


# Пример использования функции:
api_key = 'shds-vhXp090jW4Se2aUndxFc3ki9ltq'


@model_blueprint.route('/apply', methods=['POST'])
def apply():
    data = request.json
    text = data['text']
    sbert_outp = main([text], model, tokenizer, device)
    gpt_outp = gpt_main(text)
    # поэлементно перемножаем два результата
    outp = [sbert_outp[k] * gpt_outp[k] for k in range(5)]
    return jsonify(outp)


def remove_file(filepath):
    # Функция для удаления файла
    os.remove(filepath)


@model_blueprint.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']

    if file.filename == '':
        return "No selected file", 400

    if file:
        filepath = os.path.join('/tmp', file.filename)
        file.save(filepath)
        processed_filepath = process_file(filepath)
    response = send_file(
        f"handle_model/{processed_filepath}",
        as_attachment=True,
        mimetype='text/csv',
    )
    response.headers["Content-Disposition"] = f"attachment; filename={processed_filepath}"
    return response


def process_file(filepath: str) -> str:
    with open(filepath, 'r', encoding='utf-8') as f:
        input_data = [line.strip() for line in f.readlines()]

    with open(f'{filepath[:-4]}_processed.csv', 'w', encoding='utf-8') as f:
        csv_writer = csv.writer(f)
        for text in input_data:
            sbert_outp = main([text], model, tokenizer, device)
            gpt_outp = gpt_main(text)
            outp = [sbert_outp[k] * gpt_outp[k] for k in range(5)]
            csv_writer.writerow(outp)

    return f'{filepath[:-4]}_processed.csv'

