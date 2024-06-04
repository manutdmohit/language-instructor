'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          borderRadius: ['20%', '50%', '20%'],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-32 h-32 bg-blue-500"
      />
    </div>
  );
}
