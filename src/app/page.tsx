'use client';

import { motion } from 'framer-motion';
import { FaNetworkWired, FaPlane, FaChalkboardTeacher } from 'react-icons/fa';
import Hero from '@/components/Hero';
import CoursesOnly from '@/components/CoursesOnly';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center"
        >
          Namaste & 안녕하세요!
        </motion.h1>
      </header>

      <Hero />

      <main className="container mx-auto mt-8 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-semibold mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg"
          >
            Dreaming of a future in South Korea? It's an amazing destination for
            work or study, where you can earn between 2.5 to 3 Lakhs Nrs. Hi, I
            am Karna Shahi, let me be your guide! I'm a passionate Korean
            language instructor with years of teaching experience across Nepal's
            vibrant cities. My mission is to share my expertise and cultural
            wisdom to help you succeed in your Korean journey.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FaNetworkWired,
              title: 'Work Experience',
              text: '6 years',
            },
            {
              icon: FaPlane,
              title: 'Teaching Experience',
              text: '3 years',
            },
            {
              icon: FaChalkboardTeacher,
              title: 'Teaching',
              text: 'All levels, TOPIK prep',
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Icon className="text-5xl mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </section>

        <section className="mt-8 mb-8 p-4 space-y-12 bg-white rounded-lg shadow-lg">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-semibold mb-4"
          >
            Courses
          </motion.h2>
          <CoursesOnly />
        </section>
      </main>
    </div>
  );
}
