import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-3">FoodKALASH</h2>
          <p className="text-sm">
            Delivering soulful food with warmth, inspired by divinity. Fresh, hygienic, and full of love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><a href="/menu" className="hover:text-green-600">Menu</a></li>
            <li><a href="/about" className="hover:text-green-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
            <li><a href="/partner" className="hover:text-green-600">Partner With Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-1">📍 Greater Noida, India</p>
          <p className="text-sm mb-1">📞 +91 98765 43210</p>
          <p className="text-sm mb-1">✉️ support@akshayapatra.com</p>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="text-sm hover:text-green-600">Instagram</a>
            <a href="#" className="text-sm hover:text-green-600">LinkedIn</a>
            <a href="#" className="text-sm hover:text-green-600">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} FoodKALASH | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
