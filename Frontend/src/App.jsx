import "./App.css";

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

function App() {
  // State for projects, loading, and error
  const [projects, setProjects] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5555/api/projects"); // Replace with your actual API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching projects:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  useEffect(() => {
    const fetchAboutData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5555/api/about"); // Replace with your actual API endpoint
        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching projects:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Router configuration, passing projects and loading state as props
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              projects={projects}
              isLoading={isLoading}
              error={error}
              about={aboutData}
            />
          }
        />
        <Route
          path="projects"
          element={<WorkPage projects={projects} about={aboutData} />}
        />
        <Route
          path="/projects/:id"
          element={<Project projects={projects} about={aboutData} />}
        />
        <Route path="about" element={<AboutPage about={aboutData} />} />
        <Route path="contact" element={<ContactPage about={aboutData} />} />
      </Route>
    )
  );

  return (
    <>
      {projects && aboutData ? (
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
