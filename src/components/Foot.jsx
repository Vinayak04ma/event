import React from "react";

const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              Discover and explore events happening in Raipur. Join us for an unforgettable experience!
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Events</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} All Events in Bhopal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
