import pool from "./pool";

const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};
/*
const insertMessage = async () => {
    
}
    */

export { getAllMessages };
