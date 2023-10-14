import mongoose from "mongoose";

// Create a Mongoose schema for the Person model
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
  },
});
// Create the Person model based on the schema
const Person = mongoose.model("person", personSchema);

export default Person;
