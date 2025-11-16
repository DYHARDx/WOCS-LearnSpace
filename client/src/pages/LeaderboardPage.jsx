import React from "react";
import Leaderboard from "../components/Leaderboard";
import { Link } from "react-router-dom";

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Contributor Leaderboard</h1>
          <Link 
            to="/dashboard" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Back to Dashboard
          </Link>
        </div>
        
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;