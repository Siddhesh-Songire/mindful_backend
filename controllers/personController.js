// controllers/personController.js
import Person from "../models/Person.js";

// Get all persons
export const getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific person by ID
export const getPersonById = async (req, res) => {
  const personId = req.params.id;
  try {
    const person = await Person.findOne({ _id: personId });
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new person
export const addPerson = async (req, res) => {
  const newPerson = req.body;

  try {
    const createdPerson = await Person.create(newPerson);
    res.status(201).json(createdPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a person by ID
export const updatePersonById = async (req, res) => {
  const personId = req.params.id;
  const updatedPerson = req.body;

  try {
    const person = await Person.findOneAndUpdate(
      { _id: personId },
      updatedPerson,
      { new: true }
    );
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a person by ID
export const deletePersonById = async (req, res) => {
  const personId = req.params.id;

  try {
    const deletedPerson = await Person.findOneAndDelete({ _id: personId });
    if (!deletedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
