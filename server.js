import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import Person from "./models/User.js";

dotenv.config();

const app = express();

app.get("/users", async (req, res) => {
  try {
    const users = await Person.find();
    res.json(users);
  } catch (err) {
    throw new Error(err);
  }
});

app.post("/create", async (req, res) => {
  try {
    const createUser = new Person({
      name: "Dele",
      age: 30,
      favoriteFoods: ["bread", "oat", "beans"],
    });

    await createUser.save();

    res.json(createUser);
  } catch (err) {
    console.log(err);
  }
});

app.put("/edit", async (req, res) => {
  try {
    const findUser = { _id: "652a7485d1fc8cad14f3ee08" };

    const updateUser = { name: "Tola" };

    const result = await Person.findOneAndUpdate(findUser, updateUser);

    res.json("updated successfully");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete", async (req, res) => {
  try {
    // find a document with id
    let id = "652a7485d1fc8cad14f3ee08";

    // find and delete document with the id
    await Person.findByIdAndDelete(id);
    res.json("User deleted successfully");
  } catch (err) {
    console.log(err);
  }
});

connectDB().then(() => {
  console.log("Database connected");
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
