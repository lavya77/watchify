import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-purple-400">Lvyaverse</h1>

      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-purple-300">Home</a></li>
        <li><a href="#" className="hover:text-purple-300">About</a></li>
        <li><a href="#" className="hover:text-purple-300">Services</a></li>
        <li><a href="#" className="hover:text-purple-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
