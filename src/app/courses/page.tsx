'use client';

import { motion } from 'framer-motion';

import AllCourses from '@/components/Courses';

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="relative inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses</h1>
            <p className="text-xl md:text-2xl">
              Discover our range of Korean language courses tailored to your
              needs!
            </p>
          </motion.div>
        </div>
      </header>

      <AllCourses />
    </div>
  );
}
