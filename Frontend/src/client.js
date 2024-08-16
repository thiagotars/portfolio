import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import dotenv from "dotenv";

// Load environment variables from .env file
// dotenv.config();

export const client = createClient({
  projectId: "fv01o6zx",
  dataset: "production",
  apiVersion: "2024-05-11",
  useCdn: true,
  token:
    "skbJDurzw5Dl1ApnMPMRxFGxmtGvj7wG7YI0Ag5eIsdwvmP0eppORBWBWH3cha9pQEL7cPs5b9XLZGbFyU1m6W0fZ7gC0rq2lMN4aXSH82zBWwIhGrCirYKg35KrCscRJfKx5SodjvRDxhI9qNe1PhCGc27YXBQd01lCiFtJLL6y3LeDmVIY",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
