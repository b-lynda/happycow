import { useState } from "react";

const DropdownMenu = ({ name, tab }) => {
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
      {name}
      {isOpen && (
        <ul>
          {tab.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
