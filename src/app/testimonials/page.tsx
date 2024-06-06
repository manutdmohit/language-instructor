'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    avatar: '/images/karanshahi.jpg',
    name: 'Sujin Lee',
    location: 'Seoul, South Korea',
    text: `Sagar's lessons truly bridge the gap between Korea and Nepal. His innovative methods, like analyzing K-pop lyrics, made learning Korean fun and engaging. I can now communicate with my in-laws and appreciate dramas on a deeper level. His passion shines through every lesson!`,
  },
  {
    avatar: '/images/karanshahi.jpg',
    name: 'Prabin Sharma',
    location: 'Kathmandu, Nepal',
    text: `As a Nepali working for a Korean company, I needed to improve my language skills quickly. Sagar's flexible scheduling and tailored lessons were perfect. His stories about Seoul life made the language feel alive, not just words on a page. I aced my TOPIK exam and got promoted!`,
  },
  {
    avatar: '/images/karanshahi.jpg',
    name: 'Emily Davis',
    location: 'Los Angeles, USA',
    text: `Sagar's lessons were an immersive cultural experience. From virtual temple tours to Korean snack tastings, I felt like I was in Seoul! His deep knowledge and genuine love for both cultures made every class engaging. I can now watch K-dramas without subtitles—a game-changer for a huge fan like me!`,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 50 },
  };

  return (
    <div className="min-h-screen bg-gray-100 mb-5">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our Students Say
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Bridging cultures, connecting hearts.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <section className="relative">
          <div className="absolute inset-0 flex items-center justify-between px-5">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + testimonials.length) % testimonials.length
                )
              }
              className="text-blue-600 text-4xl hover:text-blue-800 transition"
            >
              <FaQuoteLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % testimonials.length)
              }
              className="text-blue-600 text-4xl hover:text-blue-800 transition"
            >
              <FaQuoteRight />
            </motion.button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-lg shadow-lg mx-4 md:mx-16 relative"
          >
            <motion.img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-semibold mb-2"
            >
              {testimonials[currentIndex].name}
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-gray-600 mb-4">
              {testimonials[currentIndex].location}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              "{testimonials[currentIndex].text}"
            </motion.p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
