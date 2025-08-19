import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user.context";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  // Create project
  const createProject = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    axios
      .post("/projects/create", { name: projectName })
      .then((res) => {
        const newProject = res.data.project;
        if (newProject) setProjects((prev) => [...prev, newProject]);
        setProjectName("");
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch projects
  useEffect(() => {
    axios
      .get("/projects/all")
      .then((res) => {
        setProjects(res.data.projects || []);
      })
      .catch((err) => {
        console.error(err);
        setProjects([]);
      });
  }, []);

  return (
    <main className="p-4">
      {/* Projects Grid */}
      <div className="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="project w-full p-4 border border-slate-300 rounded-md text-center hover:bg-slate-100"
        >
          New Project <i className="ri-link ml-2"></i>
        </button>

        {projects.map((project) => (
          <div
            key={project._id}
            onClick={() => navigate(`/project`, { state: { project } })}
            className="project w-full sm:w-auto flex flex-col gap-2 cursor-pointer p-4 border border-slate-300 rounded-md hover:bg-slate-200"
          >
            <h2 className="font-semibold">{project.name}</h2>
            <div className="flex gap-2 text-sm">
              <p className="flex items-center gap-1">
                <i className="ri-user-line"></i> Collaborators:
              </p>
              {project?.users?.length || 0}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-2">
          <div className="bg-white p-6 rounded-md shadow-md w-11/12 sm:w-2/3 md:w-1/3">
            <h2 className="text-xl mb-4">Create New Project</h2>
            <form onSubmit={createProject}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 flex-wrap">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
