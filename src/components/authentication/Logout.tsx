// authentication/Logout.tsx

import React from "react";

const Logout: React.FC = () => {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <p className="text-lg font-semibold mb-4">
          Are you sure you want to log out?
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
