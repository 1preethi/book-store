import { FaBook, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

import "./index.css";

const Header = () => {
  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        const cartItemsCount = cartList.length;
        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        );
      }}
    </CartContext.Consumer>
  );

  return (
    <nav className="header-container">
      <div className="header-content-container">
        <Link to="/" className="nav-link">
          <div className="logo-container">
            <div className="logo">B</div>
            BOOKSTORE
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
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
