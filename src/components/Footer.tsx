'use client';

import Link from 'next/link';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 text-white p-6 text-center mt-auto">
      <p>
        © {currentYear}, Karan Shahi, Korean Language Instructor. All rights
        reserved.
      </p>
      <Link href="tel:9749902198">
        <p className="text-center mt-2 mx-auto">Phone: 9749902198</p>
      </Link>

      <div className="flex justify-center mt-4 space-x-4">
        {[
          {
            icon: FaFacebook,
            link: 'https://www.facebook.com/rumesh.shshi',
          },
          { icon: FaWhatsapp, link: 'https://wa.me/+9779749902198' },
          {
            icon: MdEmail,
            link: 'mailto: shahikarna4444@gmail.com',
          },
        ].map((Icon, index) => (
          <motion.a
            key={index}
            href={Icon.link}
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-blue-300"
          >
            <Icon.icon />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
