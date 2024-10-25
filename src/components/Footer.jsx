import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <div className="bg-dark-green text-white py-16 px-10 bg-[#00160C] ">
      <div className="container mx-auto flex justify-between">
        {/* Newsletter Subscription */}
        <div className="">
          <h3 className="text-2xl font-semibold mb-4">Subscribe for More News</h3>
          <form onSubmit={handleSubmit} className="flex py-2 px-2 bg-white rounded-full">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0a7847] text-white px-6 py-2 rounded-full hover:bg-[#1eb83a] transition-colors duration-200  hover:bg-[#0A7847] hover:text-white transition-all duration-300 hover:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-[#0a7847]">Home</a></li>
            <li><a href="/about" className="hover:text-[#0a7847]">About Me</a></li>
            <li><a href="/services" className="hover:text-[#0a7847]">Contact Us</a></li>
            <li><a href="/services" className="hover:text-[#0a7847]">Amenities</a></li>
            <li><a href="/services" className="hover:text-[#0a7847]">Floor Plans</a></li>
            <li><a href="/services" className="hover:text-[#0a7847]">Gallery</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/blogs" className="hover:text-[#0a7847]">Blogs</a></li>
            <li><a href="/events" className="hover:text-[#0a7847]">Events</a></li>
            <li><a href="/books" className="hover:text-[#0a7847]">Broucher</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>7-Court Road 248001 Dehradun</li>
            <li>(610) 845-7986</li>
            <li>hello@therealestategroup.co</li>
            <li>
              <a 
                href="/contact" 
                className="inline-block mt-4 px-6 py-2 bg-[#0a7847] text-white rounded-full hover:bg-[#0A7847] hover:text-white transition-all duration-300 hover:scale-95"
              >
                Free Enquiry
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;