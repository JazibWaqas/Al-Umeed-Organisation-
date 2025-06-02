// src/components/Siderbar.jsx
import { FaHome, FaUpload, FaUser, FaCog } from "react-icons/fa";

const Siderbar = () => {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">AURA Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
          <FaHome />
          <span>Home</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
          <FaUpload />
          <span>Upload</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
          <FaUser />
          <span>Patients</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded">
          <FaCog />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default Siderbar;
