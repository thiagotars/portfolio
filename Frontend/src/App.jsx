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
import NotFoundPage from "./pages/NotFoundPage";
import { useState, useEffect } from "react";
import { urlFor, client } from "./client";

function App() {
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
          path="work"
          element={<WorkPage projects={projects} about={abouts} />}
        />
        <Route
          path="/work/:id"
          element={<Project projects={projects} about={abouts} />}
        />
        <Route path="about" element={<AboutPage about={abouts} />} />
        <Route path="contact" element={<ContactPage about={abouts} />} />

        <Route path="*" element={<NotFoundPage />} />
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
