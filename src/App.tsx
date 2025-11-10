import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 text-center mb-8">
          If you can see styled components below, Tailwind is working! ✅
        </p>
        
        {/* Test various Tailwind utilities */}
        <div className="space-y-4">
          {/* Colors */}
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded"></div>
            <div className="w-8 h-8 bg-green-500 rounded"></div>
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded"></div>
            <div className="w-8 h-8 bg-purple-500 rounded"></div>
          </div>

          {/* Typography */}
          <div className="border-l-4 border-blue-400 pl-4">
            <h2 className="text-xl font-semibold text-gray-800">Typography Test</h2>
            <p className="text-sm text-gray-600 mt-1">
              This tests font weights, sizes, and colors
            </p>
          </div>

          {/* Buttons with different states */}
          <div className="flex space-x-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Primary Button
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Secondary
            </button>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Box 1
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Box 2
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-red-400 h-20 rounded-lg flex items-center justify-center text-white font-bold">
              Box 3
            </div>
          </div>

          {/* Responsive design test */}
          <div className="bg-gray-100 p-4 rounded-lg mt-6">
            <p className="text-center text-gray-700">
              Resize your browser to test responsive design
            </p>
            <div className="text-center mt-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Mobile First
              </span>
            </div>
          </div>
        </div>

        {/* Success indicator */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-green-800 font-medium">Tailwind CSS is working!</h3>
              <p className="text-green-700 text-sm mt-1">
                All utilities are functioning correctly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;