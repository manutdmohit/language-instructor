'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CoursesOnly from './CoursesOnly';

const AllCourses = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 50 },
  };

  return (
    <main className="container mx-auto mt-8 p-4 space-y-12">
      <CoursesOnly />
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Why Choose Our Courses?
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Our courses are designed to be interactive, engaging, and tailored to
          your learning pace. With experienced instructor and a focus on
          practical usage, you'll gain the confidence to communicate effectively
          in Korean.
        </p>
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Enrollment Information
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Ready to start learning? Enroll now by contacting us via email or
          phone. We offer flexible schedules and personalized lesson plans to
          fit your needs.
        </p>
      </motion.section>
    </main>
  );
};

export default AllCourses;
