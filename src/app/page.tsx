'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPlane, FaChalkboardTeacher } from 'react-icons/fa';

export default function Home() {
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setAspectRatio(3 / 4); // portrait for better fit
      } else if (window.innerWidth < 1024) {
        // tablet
        setAspectRatio(4 / 3); // slightly taller
      } else {
        // desktop
        setAspectRatio(21 / 9); // ultrawide for dramatic effect
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      <section className="relative h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
        <Image
          src="/images/karanshahi.jpg"
          alt="Seoul Skyline"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: aspectRatio > 1 ? 'center top' : 'center 20%',
          }}
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAkAAJ8AmHd1hgcAAAAASUVORK5CYII="
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
          >
            From Seoul to Kathmandu
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}
          >
            With years of experience teaching in the heart of Seoul, I bring the
            essence of Korean language and culture back to my home in Nepal.
            Join me on this unique language journey.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
          >
            Start Your Korean Adventure
          </motion.button>
        </div>
      </section>

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
            I'm a passionate Korean language instructor with years of experience
            teaching in Korea. Now, I'm back in my home country, Nepal, sharing
            my expertise and cultural insights.
          </motion.p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FaGraduationCap,
              title: 'Education',
              text: "Master's in Korean Studies",
            },
            {
              icon: FaPlane,
              title: 'Experience',
              text: '5 years teaching in Seoul',
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
      </main>
    </div>
  );
}
