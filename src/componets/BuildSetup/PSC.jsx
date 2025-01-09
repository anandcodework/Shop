import React, { useState } from "react";

const PowerSupplyCalculator = () => {
  // State to store user selections
  const [cpu, setCpu] = useState(0);
  const [gpu, setGpu] = useState(0);
  const [ram, setRam] = useState(0);
  const [storage, setStorage] = useState(0);
  const [fans, setFans] = useState(0);
  const [totalPower, setTotalPower] = useState(0);

  // Function to calculate total power requirement
  const calculatePower = () => {
    const total = cpu + gpu + ram + storage + fans;
    setTotalPower(total);
  };

  // Function to reset the form
  const resetForm = () => {
    setCpu(0);
    setGpu(0);
    setRam(0);
    setStorage(0);
    setFans(0);
    setTotalPower(0);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-7xl grid grid-cols-2 gap-6">
        {/* Left column for component selection */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6">Your configuration</h2>

          {/* CPU Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">CPU</h3>
            <div className="flex gap-2">
              <select
                onChange={(e) => setCpu(Number(e.target.value))}
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-secondary"
              >
                <option value="0">Select Brand</option>
                <option value="65">Intel i5 (65W)</option>
                <option value="95">Intel i7 (95W)</option>
                <option value="125">AMD Ryzen 9 (125W)</option>
              </select>
              <select className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md">
                <option value="0">Select Socket</option>
                {/* Add other options as needed */}
              </select>
              <select className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md">
                <option value="0">Select Model</option>
                {/* Add other options as needed */}
              </select>
            </div>
          </div>

          {/* GPU Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">GPU</h3>
            <div className="flex gap-2">
              <select
                onChange={(e) => setGpu(Number(e.target.value))}
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-secondary"
              >
                <option value="0">Select Brand</option>
                <option value="150">NVIDIA RTX 3060 (150W)</option>
                <option value="220">NVIDIA RTX 3080 (220W)</option>
                <option value="350">NVIDIA RTX 4090 (350W)</option>
              </select>
              <select className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md">
                <option value="0">Select Model</option>
              </select>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md"
              />
            </div>
          </div>

          {/* RAM Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">RAM</h3>
            <div className="flex gap-2">
              <select
                onChange={(e) => setRam(Number(e.target.value))}
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-secondary"
              >
                <option value="0">Select Memory Module</option>
                <option value="20">8GB (20W)</option>
                <option value="30">16GB (30W)</option>
                <option value="40">32GB (40W)</option>
              </select>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md"
              />
            </div>
          </div>

          {/* Storage Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">Storage</h3>
            <div className="flex gap-2">
              <select
                onChange={(e) => setStorage(Number(e.target.value))}
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-secondary"
              >
                <option value="0">Select Storage Type</option>
                <option value="5">SSD (5W)</option>
                <option value="10">HDD (10W)</option>
              </select>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md"
              />
            </div>
          </div>

          {/* Fans Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-2">Number of Fans</h3>
            <input
              type="number"
              onChange={(e) => setFans(Number(e.target.value) * 5)}
              className="w-full py-2 px-4 border border-gray-700 bg-gray-800 text-white rounded-md"
              placeholder="Enter number of fans"
              min="0"
            />
          </div>

          {/* Reset and Calculate Button */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={resetForm}
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Reset Data
            </button>
            <button
              onClick={calculatePower}
              className="bg-secondary/80 text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300"
            >
              Calculate Power
            </button>
          </div>
        </div>

        {/* Right column for results */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-secondary text-center">Your recommended PSU wattage is</h2>
          <div className="flex justify-center items-center mt-10">
            <p className="text-6xl font-extrabold text-secondary">{totalPower} WATTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerSupplyCalculator;
