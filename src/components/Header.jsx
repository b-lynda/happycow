import logo from "../assets/img/happycow-logo.svg";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo happycow" />
      </div>
      <div className="navigation">
        <div className="navigationLeft">
          <ul>
            <ul className="menuExp">Explore</ul>
            <li>Forum</li>
            <li>Blog</li>
            <li>The App</li>
            <li>Shop</li>
            <li>More</li>
          </ul>
        </div>
        <div className="navigationRight">
        {/* <button><i>{FaMagnifyingGlass}</i></button> */}
        <button className="addList">Add Listing</button>
        <button className="login">Login/Join</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
