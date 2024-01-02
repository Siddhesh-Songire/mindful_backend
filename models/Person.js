// models/Person.js
import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const persons = mongoose.model("persons", personSchema);

export default persons;
