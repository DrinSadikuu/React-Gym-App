// components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://www.twitter.com" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="https://www.linkedin.com" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
