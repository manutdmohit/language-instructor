'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
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

export default function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl md:text-2xl">
              I'm here to help you start your Korean language journey!
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
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed">
            Have questions or ready to start learning Korean? Feel free to reach
            out via the contact details below or fill out the contact form. I
            look forward to hearing from you!
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
              icon: FaEnvelope,
              title: 'Email',
              text: 'karan@example.com',
            },
            {
              icon: FaPhone,
              title: 'Phone',
              text: '+123 456 7890',
            },
            {
              icon: FaMapMarkerAlt,
              title: 'Location',
              text: '123 Seoul St, Kathmandu, Nepal',
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
            Contact Form
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Please fill out the form below with your name, email, subject, and
            message. I will get back to you as soon as possible.
          </p>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-auto bg-blue-600 text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            Office Hours
          </h2>
          <p className="text-lg leading-relaxed">
            I am available for contact or appointments during the following
            hours:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            Connect with Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Follow me on social media for updates, tips, and community
            engagement:
          </p>
          <div className="flex space-x-4 justify-center">
            {[
              { icon: FaFacebook, link: 'https://www.facebook.com' },
              { icon: FaTwitter, link: 'https://www.twitter.com' },
              { icon: FaInstagram, link: 'https://www.instagram.com' },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-4xl hover:text-blue-800 transition-colors"
              >
                {React.createElement(icon)}
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">FAQ</h2>
          <p className="text-lg leading-relaxed">
            Have questions? Check out the FAQ section for quick answers to
            common questions.
          </p>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">
            Take the First Step
          </h2>
          <p className="text-lg leading-relaxed">
            Embark on your Korean language learning journey today! I am here to
            support you every step of the way.
          </p>
        </motion.section>
      </main>
    </div>
  );
}
