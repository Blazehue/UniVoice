import React from 'react';
import { Calendar, Bell } from 'lucide-react';

const upcomingMeetings = [
  { id: '1', student: 'Student A', date: 'September 5, 2024', time: '10:00 AM' },
  { id: '2', student: 'Student B', date: 'September 6, 2024', time: '2:00 PM' },
  { id: '3', student: 'Student C', date: 'September 7, 2024', time: '11:30 AM' },
  { id: '4', student: 'Student D', date: 'September 8, 2024', time: '9:00 AM' }
];

const mentorshipRequests = [
  { id: '1', student: 'Student X', date: 'September 3, 2024', time: '1:00 PM' },
  { id: '2', student: 'Student Y', date: 'September 4, 2024', time: '3:30 PM' },
  { id: '3', student: 'Student Z', date: 'September 5, 2024', time: '9:00 AM' }
];

const PMentor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Hello Mentor!</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Meetings</h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Meeting with {meeting.student}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Date: {meeting.date}</p>
                  <p className="text-gray-600 dark:text-gray-400">Time: {meeting.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
            <div className="space-y-4">
              {mentorshipRequests.map((request) => (
                <div key={request.id} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center text-red-400 mb-2">
                    <Bell className="w-5 h-5 mr-2" />
                    <span>Mentorship Request from {request.student}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Date: {request.date}</p>
                  <p className="text-gray-600 dark:text-gray-400">Requested Meeting Time: {request.time}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Accept Request
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMentor;
