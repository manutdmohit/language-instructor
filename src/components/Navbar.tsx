'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome,
  FaBook,
  FaComments,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import { BiSolidContact } from 'react-icons/bi';

const navItems = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/courses', label: 'Courses', icon: FaBook },
  { href: '/testimonials', label: 'Testimonials', icon: FaComments },
  { href: '/about', label: 'About', icon: FaUser },
  { href: '/contact', label: 'Contact', icon: BiSolidContact },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <nav className="bg-blue-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Karna Shahi
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white flex items-center hover:text-blue-200"
              >
                <Icon className="text-xl mr-1" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="bg-blue-800 z-50 md:hidden flex flex-col justify-center items-center mt-2"
          >
            <ul className="space-y-6 text-center mt-2">
              {navItems.map(({ href, label, icon: Icon }, index) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className="text-white text-2xl flex flex-col items-center hover:text-blue-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="text-2xl mb-1" />
                    <span>{label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
