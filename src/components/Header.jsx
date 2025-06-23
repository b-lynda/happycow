import logo from "../assets/img/happycow-logo.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo happycow" />
      </div>
      <div className="navigation">
        <div className="navigationLeft">
          <ul>
            {handleMouseEnter === true ? (
              <li>Salut</li>
            ) : (
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="menuExp"
              >
                Explore
              </li>
            )}

            <li>Forum</li>
            <li>Blog</li>
            <li>The App</li>
            <li>Shop</li>
            <li>More</li>
          </ul>
        </div>
        <div className="navigationRight">
          <FaMagnifyingGlass className="buttonSearch" />
          <button className="addList">Add Listing</button>
          <button className="login">Login/Join</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
