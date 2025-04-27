import pool from "./pool.js";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};
/*
const insertMessage = async () => {
    
}
    */

export { getAllMessages };
