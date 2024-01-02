// routes/personRoutes.js
import express from "express";
import {
  getAllPersons,
  getPersonById,
  addPerson,
  updatePersonById,
  deletePersonById,
} from "../controllers/personController.js";
const router = express.Router();

// Get all persons
router.get("/", getAllPersons);

// Get a specific person by ID
router.get("/:id", getPersonById);

// Add a new person
router.post("/", addPerson);

// Update a person by ID
router.put("/:id", updatePersonById);

// Delete a person by ID
router.delete("/:id", deletePersonById);

export default router;
