import logo from "../assets/img/happycow-logo.svg";
import DropdownMenu from "./DropdownMenu";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const tabExplore = [
    {title:'Nearby', href:'#'},
    {title:'Nearby', href:'#'},
    {title:'Nearby', href:'#'},
    {title:'Nearby', href:'#'},
    {title:'Nearby', href:'#'},
  ];
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo happycow" />
      </div>
      <DropdownMenu
        name={"Explore"} tab={tabExplore}
       
      />
      <div className="navigation">
        <div className="navigationLeft">
          <ul>
            <li>Forum</li>
            <li>Blog</li>
            <li>The App</li>
            <li>Shop</li>
          </ul>
          <DropdownMenu  name={"More"} />
        </div>

        <div className="navigationRight">
          <FaMagnifyingGlass className="buttonSearch" />
          <button className="addList">Add Listing</button>
          <button className="login">Login/Join</button>
        </div>
      </div>
      *
    </section>
  );
};

export default Header;
