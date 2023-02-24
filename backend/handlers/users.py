from flask import jsonify
from dao.users import UsersDAO


class UsersHandler:
    def build_user_dict(self, row):
        result = {}
        result['user_id'] = row[0]
        result['email'] = row[1]
        result['password'] = row[2]
        result['firstname'] = row[3]
        result['lastname'] = row[4]
        result['phone'] = row[5]
        return result

    def getAllUsers(self):
        dao = UsersDAO()
        users_list = dao.getAllUsers()
        result = []
        for row in users_list:
            dict = self.build_user_dict(row)
            result.append(dict)
        return jsonify(result)
