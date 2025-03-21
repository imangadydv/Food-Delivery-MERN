import React from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

const Menu = () => {
  return (
    <div className="min-h-screen bg-green-100 p-4">
      {/* Heading Animation */}
      <motion.h1
        className="text-4xl font-bold text-green-700 text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Menu
      </motion.h1>

      {/* Filter Categories with Motion */}
      <motion.div
        className="flex flex-wrap gap-3 justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white border rounded-full hover:bg-green-200"
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Menu Items Grid with Card Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <motion.div
            key={item}
            className="bg-white shadow-lg rounded-xl p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/food-placeholder.jpg"
              alt="Food"
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">Dish Name</h2>
            <p className="text-sm text-gray-500">Short description of the dish.</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-green-600 font-bold">$12.99</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
