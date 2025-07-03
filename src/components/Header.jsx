import logo from "../assets/img/happycow-logo.svg";
import DropdownMenu from "./DropdownMenu";
import ModalLog from "./ModalLog";
import { Link } from "react-router-dom";

const Header = ({ openModal, setOpenModal }) => {
  const tabExplore = [
    { title: "Nearby", href: "#" },
    { title: "Top Rated", href: "#" },
    { title: "B&B Retreats", href: "#" },
    { title: "Add a listing", href: "#" },
    { title: "Write Review", href: "#" },
  ];

  const tabMore = [
    { title: "Recipes", href: "#" },
    { title: "Why Vegan ?", href: "#" },
    { title: "Travel Tips", href: "#" },
    { title: "Ressources", href: "#" },
  ];
  return (
    <section className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo happycow" />
        </Link>
      </div>
      <DropdownMenu name={"Explore"} tab={tabExplore} />
      <div className="navigation">
        <div className="navigationLeft">
          <ul>
            <li>Forum</li>
            <li>Blog</li>
            <li>The App</li>
            <li>Shop</li>
          </ul>
          <DropdownMenu name={"More"} tab={tabMore} />
        </div>

        <div className="navigationRight">
          
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="login"
          >
            Login/Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
