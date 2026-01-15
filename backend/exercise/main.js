import express from "express";
import knex from "knex";

const app = express();

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

app.listen(3030, function () {
  console.log(`> Ready on http://localhost:3030`);
});

// Home route return a HTML page
app.get("/", async (req, res) => {

    const result = await knexInstance.raw("SELECT COUNT(*) AS count FROM users;");
    // console.log(result);
    const count = result[0].count;
    res.send(`
    <html>
        <head>
            <title>User Count</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #4CAF50; }
                p { font-size: 20px; }
                .container { text-align: center; padding: 50px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>User count</h1>
                <p>The total number of users in the database is: <strong>${count}</strong></p>
            </div>
        </body>
    </html>
    `);
});

app.get("/pets", (req, res) => {
  res.send("I have two budgies. Do you have any pets?");
});

// Get list of all users from the table
app.get("/list-of-users", async (req, res) => {
  try {
    const usersList= await knex("user").select("id");
    if (!usersList|| !usersList.length) return res.status(404).json({ error: "No users found" });
    res.json(usersList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get list of the users sorted by creation date
app.get("/date-of-creation", async (req, res) => {
  const creationDate = await knexInstance.raw(
    "SELECT * FROM users ORDER BY created_at ;"
  );
  res.json(creationDate);
});

