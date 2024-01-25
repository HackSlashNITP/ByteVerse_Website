// Navbar.js
"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-red-100 text-slate-900">
      <div className="text-2xl text-slate-900 font-bold">Byteverse</div>
      <div
        className={`lg:flex space-x-4 ${
          isMobileMenuOpen ? "flex-col" : "hidden lg:block"
        }`}
      >
        <div className="cursor-pointer">Team</div>
        <div className="cursor-pointer">Services</div>
        <div className="cursor-pointer">Contact</div>
        <div className="cursor-pointer">Login</div>
      </div>
      <div
        className="lg:hidden text-2xl cursor-pointer"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
