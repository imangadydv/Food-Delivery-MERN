import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: 'Aarav Sharma',
    comment: 'The food was absolutely delicious, and delivery was quick. Highly recommend!',
    rating: 5,
    img: '/user1.png',
  },
  {
    name: 'Sneha Verma',
    comment: 'I love the mission behind this initiative. Great service and amazing food!',
    rating: 4,
    img: '/user2.png',
  },
  {
    name: 'Rohan Patel',
    comment: 'Very hygienic and tasty meals. My whole family loves it!',
    rating: 5,
    img: '/user3.png',
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-green-100 px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-green-700 text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Customer Testimonials
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-full border"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800">{item.name}</h3>
                <div className="flex text-yellow-500 text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - item.rating }).map((_, i) => (
                    <span key={i}>☆</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{item.comment}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Share Your Experience
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
