import express from "express"; // Import using 'import' syntax
const router = express.Router();
import { Project } from "../models/projectModel.js"; // Assuming projectModel.js uses 'export'

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from database

    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get a specific project by ID
router.get("/:id", async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId); // Find project by ID
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// (Optional) Add routes for creating, updating, and deleting projects
// depending on your portfolio requirements

export default router;
