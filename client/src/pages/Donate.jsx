import React from 'react';
import { motion } from 'framer-motion';

const Donate = () => {
  const handleDonation = (e) => {
    e.preventDefault();

    // Placeholder for Razorpay Integration
    console.log("Trigger Razorpay Payment Here");
    
    // Later you will replace this with:
    // - Create order API call to your backend
    // - Razorpay payment trigger with response data
    // - Post-payment success/failure handling
  };

  return (
    <div className="min-h-screen bg-green-100 px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-green-700 text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Donate & Sponsor a Meal
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Your generous support helps us provide nutritious meals to children and fight hunger. Every donation you make brings a smile and hope to someone’s life.
      </motion.p>

      <motion.form
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
        onSubmit={handleDonation}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[{ label: 'Full Name', type: 'text', name: 'name' },
          { label: 'Email Address', type: 'email', name: 'email' },
          { label: 'Donation Amount (₹)', type: 'number', name: 'amount' }].map((field, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              <label className="text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </motion.div>
        ))}

        <motion.div
          className="flex flex-col"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            className="border border-gray-300 px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </motion.div>

        <motion.div
          className="flex flex-col"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select</option>
            <option value="razorpay">Razorpay</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
          >
            Donate Now
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Donate;
