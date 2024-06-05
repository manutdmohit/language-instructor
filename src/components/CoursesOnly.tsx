import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaChalkboard, FaCertificate, FaGlobe } from 'react-icons/fa';

interface AnimatedIconProps {
  icon: React.ComponentType<any>;
  [key: string]: any;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  ...props
}) => {
  return (
    <motion.div {...props}>
      <Icon className="text-5xl mx-auto mb-4 text-blue-500" />
    </motion.div>
  );
};

const CoursesOnly = () => {
  const allCourses = [
    {
      icon: FaBook,
      title: 'Beginner Korean',
      description:
        'Start your Korean language journey with our beginner course. Learn the basics of Hangul, pronunciation, and simple grammar structures.',
    },
    {
      icon: FaChalkboard,
      title: 'Intermediate Korean',
      description:
        'Enhance your skills with our intermediate course. Dive deeper into grammar, vocabulary, and conversation practice.',
    },
    {
      icon: FaCertificate,
      title: 'Advanced Korean',
      description:
        'Master the Korean language with our advanced course. Perfect for those looking to achieve fluency and tackle complex topics.',
    },
    {
      icon: FaGlobe,
      title: 'Business Korean',
      description:
        'Learn Korean for the workplace. This course covers business etiquette, professional vocabulary, and cultural nuances.',
    },
  ];

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
    <motion.section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
    >
      {allCourses.map(({ icon, title, description }, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
        >
          <AnimatedIcon icon={icon} variants={fadeInUp} />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default CoursesOnly;
