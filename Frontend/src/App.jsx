import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/HomePage";
import Layout from "./pages/Layout";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Project from "./pages/Project";
import { useState, useEffect } from "react";
import { urlFor, client } from "./client";

function App() {
  // State for projects, loading, and error
  const [projects, setProjects] = useState(null);
  const [abouts, setAbouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => setProjects(data));
  }, []);
  // Fetch data on component mount
  // useEffect(() => {
  //   const fetchProjectData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:5555/api/projects"); // Replace with your actual API endpoint
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (err) {
  //       setError(err);
  //       console.error("Error fetching projects:", err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProjectData();
  // }, []);

  // useEffect(() => {
  //   const fetchAboutData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:5555/api/about"); // Replace with your actual API endpoint
  //       const data = await response.json();
  //       setAboutData(data);
  //     } catch (err) {
  //       setError(err);
  //       console.error("Error fetching projects:", err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchAboutData();
  // }, []);
  console.log(abouts);
  console.log(projects);
  // Router configuration, passing projects and loading state as props
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout about={abouts} />}>
        <Route
          index
          element={
            <Home
              projects={projects}
              isLoading={isLoading}
              error={error}
              about={abouts}
            />
          }
        />
        <Route
          path="projects"
          element={<WorkPage projects={projects} about={abouts} />}
        />
        <Route
          path="/projects/:id"
          element={<Project projects={projects} about={abouts} />}
        />
        <Route path="about" element={<AboutPage about={abouts} />} />
        <Route path="contact" element={<ContactPage about={abouts} />} />
      </Route>
    )
  );

  return (
    <>
      {projects && abouts ? (
        <RouterProvider router={router}>
          {/* Conditionally render loading state while fetching data */}
          {isLoading && <p>Loading projects...</p>}
          {error && <p>Error fetching projects: {error.message}</p>}
        </RouterProvider>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
}

export default App;
