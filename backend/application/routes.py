from flask import jsonify

from . import app


@app.route('/ping', methods=['GET'])
def response_ping():
    return jsonify({"status": "ok"}), 200


@app.errorhandler(404)
def not_found(error):
    return jsonify({'reason': 'Not found'}), 404


@app.errorhandler(500)
def internal_error(error):
    return jsonify({'reason': 'Internal error'}), 500


@app.errorhandler(400)
def bad_request(error):
    return jsonify({'reason': 'Bad request'}), 400


def check_request(keys, data):
    for key in keys:
        if key not in data:
            return False
    return True
