const connection = require('../app/database');

class UserService {
  async create(user){
    const statement = `INSERT INTO user (name,password) VALUES (?,?)`
    const result = await connection.execute(statement,[user.name,user.password])

    return result
  }

  async getUsername(name){
    const statement = `SELECT * FROM user WHERE name = ?`;
    const result = await connection.execute(statement, [name]);

    return result[0]
  }
}

module.exports = new UserService()