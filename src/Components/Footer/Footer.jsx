import React from 'react';

const Footer = () => {
  return (
    <footer  className="bg-base-200 text-base-content py-12 px-6 max-w-screen-2xl md:px-16">
      <div className="text-center mb-10 border-b-2 pb-3">
        <h1 className="text-3xl font-extrabold mb-2">Gadget Heaven</h1>
        <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="footer  flex justify-evenly gap-10 text-center md:text-left">
        <nav>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <a className="text-sm text-gray-600 hover:text-gray-800">Product Support</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Order Tracking</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Shipping & Delivery</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Returns</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <a className="text-sm text-gray-600 hover:text-gray-800">About Us</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Careers</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <a className="text-sm text-gray-600 hover:text-gray-800">Terms of Service</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a>
          <a className="text-sm text-gray-600 hover:text-gray-800">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
