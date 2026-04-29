// backend.js
import express from "express";
import cors from "cors";

import userServices from "./models/user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// fetch all users, or filter by name & job
app.get("/users", async (req, res) => {
  const name = req.query["name"];
  const job = req.query["job"];
  try {
    const result = await userServices.getUsers(name, job);
    res.send({ users_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred on the server.");
  }
});

// fetch users by id
app.get("/users/:id", async (req, res) => {
  const id = req.params["id"];
  try {
    const result = await userServices.findUserById(id);
    if (!result) {
      return res.status(404).send("Resource not found.");
    }
    res.send({ user: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred on the server.");
  }
});

// create and insert a new user
app.post("/users", async (req, res) => {
  const user = req.body;
  try {
    const savedUser = await userServices.addUser(user);
    if (savedUser) {
      res.status(201).send(savedUser);
    } else {
      res.status(500).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred on the server.");
  }
});

// remove a user, given their id
app.delete("/users/:id", async (req, res) => {
  const id = req.params["id"];
  try {
    const deletedUser = await userServices.deleteUserById(id);
    if (!deletedUser) {
      return res.status(404).send("Resource not found.");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred on the server.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});