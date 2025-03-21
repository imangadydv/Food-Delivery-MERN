import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-green-100 px-6 py-10">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-green-800 text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Akshaya Patra
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto text-gray-700 space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Paragraphs and Sections */}
        {[
          {
            type: 'text',
            content:
              'The Akshaya Patra Foundation is a non-profit organization that strives to eliminate hunger among school children by serving nutritious mid-day meals. Our goal is to ensure that no child in India is deprived of education due to hunger.',
          },
          { type: 'heading', content: 'Our Mission' },
          {
            type: 'text',
            content:
              'To feed the future of India by serving wholesome meals to underprivileged school children, encouraging school attendance, and helping build a better nation.',
          },
          { type: 'heading', content: 'Our Journey' },
          {
            type: 'text',
            content:
              'Founded in the year 2000, we started with just 1,500 meals in Bengaluru. Today, we serve millions of meals every day across multiple cities with the help of state-of-the-art kitchens and passionate volunteers.',
          },
          { type: 'heading', content: 'Impact Highlights' },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {item.type === 'heading' ? (
              <h2 className="text-2xl font-semibold text-green-700">{item.content}</h2>
            ) : (
              <p className="text-lg">{item.content}</p>
            )}
          </motion.div>
        ))}

        {/* Impact List */}
        <motion.ul
          className="list-disc list-inside"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <li>Over 3 Billion Meals Served</li>
          <li>Operating in 19,000+ schools across 12 states</li>
          <li>Supporting the education and well-being of 2 million+ children daily</li>
        </motion.ul>

        {/* Gallery Section */}
        <motion.div
          className="text-2xl font-semibold text-green-700"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((img, i) => (
            <motion.img
              key={i}
              src={`/gallery${img}.jpg`}
              alt={`Gallery ${img}`}
              className="rounded-lg shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Donate Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
