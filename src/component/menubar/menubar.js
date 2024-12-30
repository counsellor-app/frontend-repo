import React, { useState } from "react";
import "./menubar.css"

const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-bar">
      <div className="logo">my logo</div>
      <div className={`menu-links ${isOpen ? "open" : ""}`}>
        <a href="/home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default MenuBar;
