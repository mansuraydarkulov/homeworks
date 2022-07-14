import sqlite3

try:
    conn = sqlite3.connect("accountant.db")
    cursor = conn.cursor()

    #создаем пользователя с user_id = 1000
    cursor.execute("INSERT OR IGNORE INTO 'users' ('user_id') VALUES(?)", (1000,))

    #считываем всех пользователей
    users = cursor.execute("SELECT * FROM 'users'")
    print(users.fetchall())

    #подтверждаем изменения
    conn.commit()

except sqlite3.Error as error:
    print("Error", error)

finally:
    if(conn):
        conn.close()