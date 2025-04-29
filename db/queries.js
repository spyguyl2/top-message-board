import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const insertMessage = async (message) => {
  const query = "INSERT INTO messages (username, text) VALUES ($1, $2)";
  pool.query(query, message.username, message.text);
};

export { getAllMessages, insertMessage };
