'use client';

import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaPlane,
  FaChalkboardTeacher,
  FaHeart,
  FaBookOpen,
  FaCalendarCheck,
} from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export default function About() {
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="relative inline-block"
          >
            <Image
              src="/images/karanshahi.jpg"
              alt="Sagar Sharma"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-lg"
              priority
            />
            <motion.span
              className="absolute -bottom-2 -right-2 text-5xl"
              initial={{ rotate: -20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              ✨
            </motion.span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            transition={{ delay: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              नमस्ते & 안녕하세요!
            </h1>
            <p className="text-xl md:text-2xl">
              I'm Karan Shahi, Your Bridge Between Nepal and Korea
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4 space-y-12">
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            My Korean Language Journey
          </h2>
          <p className="text-lg leading-relaxed">
            My fascination with Korea began during my college years in
            Kathmandu. The allure of K-dramas and K-pop wasn't just
            entertainment—it was a window into a vibrant culture. This spark led
            me to Seoul, where I pursued my Master's in Korean Studies, living
            between the serenity of Gyeongbokgung Palace and Gangnam's energy.
          </p>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          {[
            {
              icon: FaGraduationCap,
              title: 'Qualifications',
              text: "Master's, TOPIK 6, Certified Teacher",
            },
            {
              icon: FaChalkboardTeacher,
              title: 'Experience',
              text: "7 years in Seoul's top institutions",
            },
            {
              icon: FaHeart,
              title: 'Passion',
              text: 'Bridging Nepal-Korea through language',
            },
          ].map(({ icon, title, text }, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <AnimatedIcon icon={icon} variants={fadeInUp} />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            My Teaching Philosophy: 언어는 다리입니다
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            "Language is a bridge." I don't just teach words; I connect hearts.
            My lessons blend Seoul's traditional techniques with innovative
            methods—think K-drama roleplays and virtual street food tours!
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['몰입', '재미', '맞춤', '문화'].map((text, index) => (
              <motion.li
                key={text}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-100 p-3 rounded-full text-blue-800 font-medium hover:bg-blue-200 transition-colors"
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* ... continue with the rest of the sections, applying similar animation techniques ... */}
      </main>
    </div>
  );
}
