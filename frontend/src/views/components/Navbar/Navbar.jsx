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
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand align-items-center" href="#">
            <img className="logo" src="/src/assets/8334 [Converted].png" />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto align-items-center">
              <li class="nav-item mx-4">
                <a class="menu-item" href="#">
                  <a className="menu-item">Events</a>
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="menu-item " href="#">
                  Results
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="menu-item " href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item mx-4">
                <a class="menu-item " href="#">
                  Contact Us
                </a>
              </li>
              <Button className="register-button">Register</Button>
            </ul>
          </div>
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
