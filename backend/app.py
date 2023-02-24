from flask import Flask, jsonify, request
from flask_cors import CORS
from handlers.users import *

# Activate
app = Flask(__name__)

# Apply CORS to this app
CORS(app)

# Home


@app.route('/')
def greeting():
    return 'Hello! This is the Greenlease App!'


@app.route('/test', methods=["GET", "POST"])
def testing():
    parameter = request.args.get('try')
    if request.method == "GET":
        print(parameter)
        return jsonify("test")
    elif request.method == "POST":
        print(parameter.split(","))
        return jsonify(parameter)
    else:
        return jsonify("Not Supported"), 405

# ============= Main Entity Endpoints with GET, POST, PUT, DELETE ======================

# All Users


@app.route('/greenlease/users', methods=["GET", "POST", "PUT", "DELETE"])
def getAllUsers():
    user_id = request.args.get('user_id')
    email = request.args.get('email')
    password = request.args.get('password')
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    phone = request.args.get('phone')
    if request.method == "GET":
        return UsersHandler().getAllUsers()
    # elif request.method == "POST":
    #     return UsersHandler().addNewUser(username, password, first_name, last_name)
    # elif request.method == "PUT":
    #     return UsersHandler().updateUser(username, first_name, last_name)
    # elif request.method == "DELETE":
    #     return UsersHandler().deleteUser(user_id)
    else:
        return jsonify("Not Supported"), 405


if __name__ == '__main__':
    app.run(debug=1)
