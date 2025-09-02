import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 py-8 text-center text-sm text-gray-600 dark:text-gray-300">
      <div className="max-w-3xl mx-auto">
        <p>© {new Date().getFullYear()} Ngamesh Raj Bhandari — All rights reserved.</p>
      </div>
    </footer>
  );
}
