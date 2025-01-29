import React from 'react';
import { GraduationCap, Search, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onLoginClick, onSignUpClick }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">UNIVoice</span>
        </Link>

        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-600" />}
          </button>
          
          <Link to="/network" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
            Our Network
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
            About Us
          </Link>
          <Link to="/mentor" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
            P-Mentor
          </Link>
          <Link to="/student" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
            P-Student
          </Link>
          <button
            onClick={onLoginClick}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
          >
            Login
          </button>
          <button
            onClick={onSignUpClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;