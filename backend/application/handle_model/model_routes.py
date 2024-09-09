from flask import Blueprint, jsonify

model_blueprint = Blueprint('model', __name__)


@model_blueprint.route('/apply', methods=['POST'])
def apply():
    return jsonify(
        {
            'teacher': True,
            'practice': False,
            'theory': True,
            'tech': False,
            'relevance': True}), 200
