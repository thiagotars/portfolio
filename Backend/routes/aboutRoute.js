import express from "express"; // Import using 'import' syntax
const router = express.Router();
import { About } from "../models/aboutModel.js";

router.get("/", async (req, res) => {
  try {
    const aboutData = await About.find(); // Fetch all projects from database
    console.log(aboutData);
    res.json(aboutData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
