import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

app.get("/unconfirmed-users", async (req, res) => {
  const unconfirmedUsers = await knexInstance.raw("SELECT * FROM users WHERE confirmed_at is NULL;");
  res.json(unconfirmedUsers);
});

app.get("/gmail-users", async (req, res) => {
  const gmailUsers = await knexInstance.raw("SELECT * FROM users WHERE email LIKE '%@gmail.com';");
  res.json(gmailUsers);
});

app.get("/2022-users", async (req, res) => {
  const users2022 = await knexInstance.raw("SELECT * FROM users WHERE created_at LIKE '2022%';");
  res.json(users2022);
});

app.get("/user-count", async (req, res) => {
  const userCount = await knexInstance.raw("SELECT COUNT(*) AS count FROM users;");
  res.json(userCount);
});

app.get("/last-name-count", async (req, res) => {
  const lastNameCount = await knexInstance.raw("SELECT last_name, COUNT(*) AS count FROM users GROUP BY last_name ORDER BY last_name;");
  res.json(lastNameCount);
});

app.get("/first-user", async (req, res) => {
  const firstUser = await knexInstance.raw("SELECT * FROM users LIMIT 1;");

  if (!firstUser) {
    res.status(404).send("No users in the table");
  } else res.json(firstUser);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});