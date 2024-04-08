import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectRoutes.js";
import aboutRoute from "./routes/aboutRoute.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Use middleware to parse JSON data
app.use(express.json());

app.use(cors());
// Use project routes
app.use("/api/projects", projectRoutes);

app.use("/api/about", aboutRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// import express, { response } from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { Project } from "./models/projectModel.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT_NUMBER || 3000;

// app.post("/api/v1/projects", async (req, res) => {
//   try {
//     console.log(req);
//     const newProject = {
//       title: req.body.title,
//       client: req.body.client,
//       year: req.body.year,
//       shortDescription: req.body.shortDescription,
//       fullDescription: req.body.fullDescription,
//       role: req.body.services,
//       images: req.body.images,
//     };

//     const project = await Project.create(newProject);
//     return res.status(200).json({ data: project });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: error.message });
//   }
// });

// app.get("/api/v1/", (req, res) => {
//   console.log(req);
//   return res.status(234).send("Hello, world!");
// });

// app.get("/api/v1/projects", async (req, res) => {
//   try {
//     const projects = await Project.find({});
//     res.status(200).json(projects);
//   } catch (error) {
//     console.log(error);
//   }
// });

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("Connection successful");
//     app.listen(PORT, () => {
//       console.log(`App listening on ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
