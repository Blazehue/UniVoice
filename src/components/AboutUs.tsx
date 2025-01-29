import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 pt-20">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl">👥</span>
            <h2 className="text-xl font-semibold mt-4">Our Community</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Over 100+ mentors from top universities helping students make informed decisions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl">🎯</span>
            <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Empowering students with real insights for better educational choices.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-4xl">❤️</span>
            <h2 className="text-xl font-semibold mt-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Transparency, authenticity, and student success drive everything we do.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">What we are</h3>
          <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-2">
            <li>
              <strong>Bridging the Gap</strong> – Connecting aspiring students with alumni and current students for real insights.
            </li>
            <li>
              <strong>Empowering Students</strong> – Helping high school graduates make informed college decisions through shared experiences.
            </li>
            <li>
              <strong>Trusted Guidance</strong> – Providing direct access to genuine perspectives for confident university choices.
            </li>
            <li>
              <strong>Mission-Driven</strong> – Making the college selection process transparent, accessible, and stress-free.
            </li>
          </ul>
          <p className="text-gray-900 dark:text-white font-bold mt-4">
            Today, we're proud to connect thousands of students with mentors from India's top universities, helping them make one of life's most important decisions with confidence and clarity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;