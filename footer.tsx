// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
        <a
          href="https://www.linkedin.com/in/rajat-pandey-58a949257/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/consult.univoice?igsh=amlucXhwYWVqdmU%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        >
          Instagram
        </a>
        <a
          href="mailto:consultonunvoice@gmail.com"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        >
          Contact Us: consultonunvoice@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
