import React from 'react';
import { Check, Clock } from 'lucide-react';

interface College {
  id: string;
  name: string;
}

const colleges: College[] = [
  { id: '1', name: 'Vit Vellore' },
  { id: '2', name: 'Thapar Insitute of Technology' },
  { id: '3', name: 'Manipal Institute of Technology' },
  { id: '4', name: 'SRM Institute of Science And Technology' },
  { id: '5', name: 'Jaypee Institute of Technology' },
  { id: '6', name: 'Anna University' },
  { id: '7', name: 'RVCE, Bangalore' },
  { id: '8', name: 'BITS Pilani' },
  { id: '9', name: 'Shiv Nadar University, Delhi' }
];

const PStudent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 p-6 space-y-4">
          <h2 className="text-xl font-semibold mb-6">Booking Progress</h2>
          <div className="space-y-2">
            <div className="flex items-center text-green-500">
              <Check className="w-5 h-5 mr-2" />
              <span>Step 1: College Selection</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Step 2: Slot Booking</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Step 3: Slot Confirmation</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Step 4: Payment Confirmation</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="w-5 h-5 mr-2" />
              <span>Step 5: Booking Confirmation</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-8">Hello Student</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Our Colleges:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colleges.map((college) => (
                <div
                  key={college.id}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  {college.name}
                </div>
              ))}
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Confirm
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Schedule Your Meeting:</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block mb-2">Select Date:</label>
                <input
                  type="date"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block mb-2">Select Time:</label>
                <input
                  type="time"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PStudent;