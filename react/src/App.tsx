import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold">Welcome to Our Site</h1>
      <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex items-center">
        <li><a className="text-white hover:text-gray-200" href="#">Home</a></li>
        <li><a className="text-white hover:text-gray-200" href="#">About</a></li>
        <li><a className="text-white hover:text-gray-200" href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default App;
