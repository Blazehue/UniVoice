import React from 'react';
import { Briefcase, GraduationCap, Stethoscope, Calculator, BookOpen, TestTube } from 'lucide-react';

const categories = [
  {
    id: 'mba',
    title: 'MBA',
    description: 'Master of Business Administration programs and insights',
    icon: Briefcase
  },
  {
    id: 'btech',
    title: 'B.TECH',
    description: 'Engineering programs and technical education',
    icon: GraduationCap
  },
  {
    id: 'mbbs',
    title: 'MBBS',
    description: 'Medical programs and healthcare education',
    icon: Stethoscope
  },
  {
    id: 'bcom',
    title: 'BCOM',
    description: 'Commerce and business studies',
    icon: Calculator
  },
  {
    id: 'bba',
    title: 'BBA',
    description: 'Business administration undergraduate programs',
    icon: BookOpen
  },
  {
    id: 'bsc',
    title: 'BSC',
    description: 'Science programs and research opportunities',
    icon: TestTube
  }
];

const Categories: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 dark:text-pink-400">
          The Categories we cater to!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;