import { useState } from "react";

const DropdownMenu = ({name,title, href, tab}) => {
    const tab = [
        {title:"", href:""},
        {title:"", href:""},
        {title:"", href:""},
        {title:"", href:""},
        {title:"", href:""},
    ]
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
          {tab.map(() => { 
          <li><a href={href}></a>{title}</li>})}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
