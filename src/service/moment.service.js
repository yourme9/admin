const connection = require('../app/database');

class MomentService {
  async create(userId,content){
    const statement = `INSERT INTO moment (user_id,content) VALUES (?,?)`
    const result = await connection.execute(statement,[userId,content])

    return result
  }

  async query(id){
    const statement = `
      SELECT 
          m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
          JSON_OBJECT('id', u.id, 'name', u.name) author
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        WHERE m.id = ?
    `;
    const result = await connection.execute(statement,[id])
    
    return result
  }

  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }
}

module.exports = new MomentService()