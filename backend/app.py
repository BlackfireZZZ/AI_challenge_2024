from application.routes import *
from application.handle_model.model_routes import model_blueprint

app.register_blueprint(model_blueprint, url_prefix='/model')


app.run("0.0.0.0", 8080, debug=True)

