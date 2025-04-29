import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const insertMessage = async (message) => {
  pool.query(
    `INSERT INTO messages (username, text, date_posted) VALUES (${message.username}, ${message.text}, ${message.date_posted})`
  );
};

export { getAllMessages, insertMessage };
