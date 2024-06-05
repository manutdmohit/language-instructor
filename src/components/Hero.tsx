import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
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
          essence of Korean language and culture back to my home in Nepal. Join
          me on this unique language journey.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
        >
          <Link href="/contact">Start Your Korean Adventure</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
