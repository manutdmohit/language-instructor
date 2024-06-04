'use client';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-6 text-center mt-auto">
      <p>© 2024 Korean Language Instructor. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-blue-300"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
