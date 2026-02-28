// Session code

const filesystem = require("fs/promises");
const express = require("express");
const bodyParser = require("body-parser");
// const knex = require("./db");

const knexLibrary = require("knex");

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: "test.sqlite3",
  },
});

async function getFile() {
  const fileContent = await filesystem.readFile("test.txt", "utf-8");
  return fileContent;
}

// main();

const app = express();
app.use(bodyParser.json());

app.get("/", (request, response) => {
  console.log("recived a request");
  response.send("this is from my / route");
});

app.get("/file", async (request, response) => {
  const fileContent = await filesystem.readFile("test.txt", "utf-8");
  response.send(fileContent);
});

app.get("/hello", (request, response) => {
  const username = request.query.name;
  if (username === "pass") {
    response.send(`this is from my hello routes ${username}`);
  } else {
    response.send("you cannot acccess this");
  }
});

app.get("/users", async (req, res) => {
  const result = await knex.raw("SELECT * FROM users");
  res.send(result);
});

app.post("/create", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;

  await knex.raw(
    `insert into users (name,password) values('${name}', '${password}')`
  );
  res.send("user created");
});

const port = process.env.PORT;
app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log(`server is ready and running in port ${port}`);
});

app.listen(3000, function () {
  console.log("hello from my first server");
});

// Assignment

