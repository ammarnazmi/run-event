import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import Button from "../Button/Button";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="/src/assets/8334 [Converted].png"/>
          <ul>
            <li>
              <a className="menu-item">Events</a>
            </li>
            <li>
              <a className="menu-item">Results</a>
            </li>
            <li>
              <a className="menu-item">About Us</a>
            </li>
            <li>
              <a className="menu-item">Contact Us</a>
            </li>
            <Button className="register-button">Register</Button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
