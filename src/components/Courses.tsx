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
          your learning pace. With experienced instructors and a focus on
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

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Student Testimonials
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Hear from our students about their experiences and successes in our
          courses. Join a community of learners who are passionate about
          mastering the Korean language!
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed">
              "This course has been amazing! The lessons are well-structured and
              the instructor is incredibly supportive. Highly recommend!" -
              Sarah K.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed">
              "I was able to achieve TOPIK level 3 within six months thanks to
              these courses. The practical approach really helped me." - John D.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AllCourses;
