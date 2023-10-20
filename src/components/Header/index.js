import { FaBook, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-content-container">
        <Link to="/" className="nav-link">
          <div className="logo-container">
            <div className="logo">C</div>
            CROSSWORD
          </div>
        </Link>

        <ul className="nav-items-container">
          <li className="icon-container">
            <Link to="/books" className="nav-link">
              <FaBook className="icon" />
              <span className="icon-name">Book List</span>
            </Link>
          </li>
          <li className="icon-container">
            <Link to="/cart" className="nav-link">
              <FaShoppingBag className="icon" />
              <span className="icon-name">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
