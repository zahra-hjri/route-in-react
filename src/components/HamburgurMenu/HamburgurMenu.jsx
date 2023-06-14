import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center text-white bg-white">
      <button
        className="hamburger block md:hidden outline-none focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>
      {isOpen && (
        <ul className="flex flex-col">
          <li className="text-white font-bold text-xl cursor-pointer">Menu item 1</li>
          <li className="text-white font-bold text-xl cursor-pointer">Menu item 2</li>
          <li className="text-white font-bold text-xl cursor-pointer">Menu item 3</li>
        </ul>
      )}
    </div>
  );
}

export default HamburgerMenu;