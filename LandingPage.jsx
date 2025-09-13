import React from "react";

const LandingPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
    <h1 className="text-4xl font-bold mb-4">Agent Dashboard</h1>
    <p className="text-lg mb-8 text-gray-600 max-w-md text-center">
      Submit logs, get agent suggestions, and review your history—all in one place.
    </p>
    <div className="flex flex-col md:flex-row gap-4">
      <a
        href="/dashboard"
        className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </a>
      <a
        href="/history"
        className="px-6 py-3 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
      >
        View History
      </a>
    </div>
  </div>
);

export default LandingPage;
