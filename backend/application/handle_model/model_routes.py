from application import app

import torch
from flask import Blueprint, jsonify, request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from application.handle_model.sbert import main

model_blueprint = Blueprint('model', __name__)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_name = "ai-forever/sbert_large_nlu_ru"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=5).to(device)
model.load_state_dict(torch.load('application/handle_model/sbert_weights.pt', weights_only=True,
                                 map_location=torch.device('cpu')))


@model_blueprint.route('/apply', methods=['POST'])
def apply():
    data = request.json
    text = data['text']
    outp = main([text], model, tokenizer, device)
    return jsonify(outp)
