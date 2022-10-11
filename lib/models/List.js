const pool = require('../utils/pool');

module.exports = class List {
  id;
  item;
  color;
  user_id;

  constructor(row) {
    this.id = row.id;
    this.item = row.item;
    this.color = row.color;
    this.user_id = row.user_id;
  }

  static async insert({ user_id, item, color }) {
    const { rows } = await pool.query(
      `INSERT INTO lists (user_id, item, color)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [user_id, item, color]
    );
    return new List(rows[0]);
  }
};
