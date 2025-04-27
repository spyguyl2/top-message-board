import "dotenv/config";
import { Client } from "pg";

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (40),
  text VARCHAR (255),
  date_posted date
  );

  INSERT INTO messages (username, text, date)
  VALUES
    ('Damon', 'Hello there', '4/27/2025'),
    ('Elle', 'Hai', '4/27/2025'),
    ('Remy', 'Happy Pico de Gallo!', '4/27/2025');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done.");
}

main();
