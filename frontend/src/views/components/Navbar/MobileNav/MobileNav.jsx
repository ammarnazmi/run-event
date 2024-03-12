import "./MobileNav.css";

export default function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : undefined}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="/src/assets/8334 [Converted].png" />
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
            <button className="register-button" onClick={() => {}}>
              Register
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
