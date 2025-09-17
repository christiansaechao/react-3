import React from "react";
import "./navbar.css";

/**
 * props {
 *  navLinks:
 *  navButtons:
 * }
 */

export const Navbar = ({ navLinks, navButtons }) => {

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        {navLinks.map((links) => (
          <a href={links.link}>{links.text}</a>
        ))}
      </div>

        {/* navButtons 1,000,000 buttons */}

      <div className="flex flex-row items-center gap-4">
        {navButtons.map((button) => (
          <button key={button.name} id={button.name}>{button.icon}</button>
        ))}
      </div>
    </div>
  );
};
