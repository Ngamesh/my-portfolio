import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 py-8 text-center text-sm text-gray-600 dark:text-gray-300 w-full flex justify-center"
    >
      <div className="max-w-3xl w-full flex justify-center items-center">
        <p className="text-center">
          © {new Date().getFullYear()} Ngamesh Raj Bhandari — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
