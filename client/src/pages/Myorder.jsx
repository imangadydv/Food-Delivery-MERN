import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Myorder = () => {
  // You can set this to [] to simulate "No Orders"
  const orders = [
    {
      id: 1,
      item: 'Veg Thali',
      price: '₹120',
      status: 'Delivered',
      img: '/food-placeholder.jpg',
    },
    {
      id: 2,
      item: 'Paneer Butter Masala',
      price: '₹180',
      status: 'On the Way',
      img: '/food-placeholder.jpg',
    },
    {
      id: 3,
      item: 'Sweet Lassi',
      price: '₹50',
      status: 'Preparing',
      img: '/food-placeholder.jpg',
    },
  ]; // Or add sample items to simulate real orders

  return (
    <div className="min-h-screen bg-green-100 px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-green-700 text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Orders
      </motion.h1>

      {orders.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/no-order.png"
            alt="No Orders"
            className="w-60 mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No orders placed yet</h2>
          <p className="text-gray-500 mb-6">Looks like you haven’t ordered anything yet.</p>
          <Link to="/menu">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Explore Menu
            </button>
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {orders.map((order) => (
            <motion.div
              key={order.id}
              className="bg-white rounded-xl shadow-md overflow-hidden p-4"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={order.img}
                alt={order.item}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-green-800">{order.item}</h2>
              <p className="text-gray-600">{order.price}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'Delivered'
                    ? 'bg-green-100 text-green-700'
                    : order.status === 'On the Way'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {order.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Myorder;
