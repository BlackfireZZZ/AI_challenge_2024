from application.routes import *
from application.handle_model.model_routes import model_blueprint

app.register_blueprint(model_blueprint, url_prefix='/model')


if __name__ == "__main__":
    app.run("0.0.0.0", 8080)

