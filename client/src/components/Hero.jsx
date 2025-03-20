import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* Greeting Tagline */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-sm md:text-lg text-gray-500 mb-2"
      >
        Nourishing Souls, Delivering Warmth
      </motion.span>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-green-700 mb-4"
      >
        Welcome to FoodKALASH
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        A soulful food delivery experience inspired by the divine Akshaya Patra — where traditional essence meets modern convenience.
      </motion.p>

      {/* Multi-language Greetings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-sm text-gray-500 mt-3"
      >
        नमस्ते | Welcome | স্বাগতম | வரவேற்பு | ਸੁਆਗਤ ਹੈ
      </motion.div>

      {/* Search Bar */}
      <motion.input
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        type="text"
        placeholder="Search your favorite food..."
        className="mt-6 px-5 py-3 w-full max-w-md border border-gray-300 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="flex flex-col md:flex-row gap-4 mt-6"
      >
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
          Explore Menu
        </button>
        <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-300">
          Join as Partner
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
