import React from 'react';

const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-700">{title}</h2>
        <p className="text-gray-600 mt-1">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-yellow-600">₹{price}</span>
          <button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
