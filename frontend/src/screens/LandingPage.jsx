import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🚀 AiChatApp</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A modern full-stack platform that brings{" "}
          <span className="font-semibold text-indigo-600">
            AI-powered coding assistance
          </span>
          , real-time collaboration, and project management — all in one place.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-200"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-16 max-w-5xl">
        <div className="p-6 bg-white rounded-2xl shadow-md text-center">
          <i className="ri-folder-2-line text-3xl text-indigo-600"></i>
          <h3 className="text-lg font-semibold mt-3">Project Management</h3>
          <p className="text-sm text-gray-600 mt-2">
            Create, view, and manage projects with ease. Add collaborators
            effortlessly.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md text-center">
          <i className="ri-chat-3-line text-3xl text-indigo-600"></i>
          <h3 className="text-lg font-semibold mt-3">Real-time Chat</h3>
          <p className="text-sm text-gray-600 mt-2">
            Collaborate instantly with Socket.IO powered chat and live updates.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md text-center">
          <i className="ri-brain-line text-3xl text-indigo-600"></i>
          <h3 className="text-lg font-semibold mt-3">AI Assistance</h3>
          <p className="text-sm text-gray-600 mt-2">
            Get AI-powered coding help with formatted answers & code snippets.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-sm bg-indigo-600 text-white">
        © {new Date().getFullYear()} AiChatApp · Built with ❤️ by Astha
      </footer>
    </main>
  );
};

export default LandingPage;
