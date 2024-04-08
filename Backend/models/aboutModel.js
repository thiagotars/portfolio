import mongoose from "mongoose";

export const aboutSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  skills: {
    hard: [{ type: String }],
    soft: [{ type: String }],
  },
  services: [
    {
      role: { type: String },
      description: { type: String },
    },
  ],
  text: [{ type: String }],
  links: [
    {
      github: { type: String },
      instagram: { type: String },
      linkedin: { type: String },
    },
  ],
});

export const About = mongoose.model("About", aboutSchema);
