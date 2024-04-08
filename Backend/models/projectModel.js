import mongoose from "mongoose";

export const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    short: {
      type: String,
      required: true,
    },
    large: {
      type: String,
      required: true,
    },
  },
  role: [{ type: String }],
  images: { cover: { type: String }, all: [{ type: String }] },
  isSelected: { type: Boolean, required: true },
  links: { live: { type: String }, github: { type: String } },
});
export const Project = mongoose.model("Project", projectSchema);
