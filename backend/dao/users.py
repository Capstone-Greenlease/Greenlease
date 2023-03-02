from config.credentials import pg_config
import psycopg2


class UsersDAO:
    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s port=%s host=%s" % (pg_config['dbname'],
                                                                            pg_config['user'],
                                                                            pg_config['password'],
                                                                            pg_config['port'],
                                                                            pg_config['host'])
        self.conn = psycopg2.connect(connection_url)

    # SELECT
    def getAllUsers(self):
        query = "select * from users;"
        cursor = self.conn.cursor()
        cursor.execute(query)
        result = []
        for row in cursor:
            print(row)
            result.append(row)
        cursor.close()
        return result

    def getUser(self, email, password):
        query = "select user_id, email, password, first_name, last_name, phone from users where email = %s and password = %s;"
        cursor = self.conn.cursor()
        cursor.execute(query, (email, password,))
        return cursor.fetchone()

    # INSERT
    def addUser(self, email, password, first_name, last_name, phone):
        query = "insert into users(email, password, first_name, last_name, phone) values(%s, %s, %s, %s, %s) returning user_id;"
        cursor = self.conn.cursor()
        cursor.execute(query, (email, password, first_name, last_name, phone))
        user_id = cursor.fetchone()[0]
        self.conn.commit()
        cursor.close()
        return user_id
