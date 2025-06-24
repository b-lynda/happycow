import { useState } from "react";

const DropdownMenu = (title, href) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="exploreMenu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Explore
      {isOpen && (
        <ul>
          <li>
            <a href={href}>{title}</a>
          </li>
          <li>
            <a href={href}>{title}</a>
          </li>
          <li>
            <a href={href}>{title}</a>
          </li>
          <li>
            <a href={href}>{title}</a>
          </li>
          <li>
            <a href={href}>{title}</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
