import { Component } from "react";
import "./index.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import UserDetailsForm from "../UserDetailsForm";

class Checkout extends Component {
  state = { is_order_placed: false };

  renderCartItems = () => (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;

        const getTotalCartPrice = () => {
          let totalCartPrice = 0;
          cartList.forEach((eachcartItem) => {
            const price = parseFloat(eachcartItem.price.slice(1));
            totalCartPrice += price;
          });
          return totalCartPrice;
        };
        const cartPrice = getTotalCartPrice();
        return (
          <div className="checkout-cart-items-container">
            <h1 className="order-summary-heading"> Order Summary</h1>
            <ul className="checkout-cart-list-container">
              {cartList.map((eachCartItem) => {
                return (
                  <li className="checkout-cart-item-container">
                    <div className="checkout-image-container">
                      <img
                        src={eachCartItem.image}
                        alt={eachCartItem.title}
                        className="checkout-cart-image"
                      />
                      <p className="checkout-cart-text">{eachCartItem.title}</p>
                    </div>
                    <p className="checkout-cart-text">{eachCartItem.price}</p>
                  </li>
                );
              })}
            </ul>
            <div className="total-container">
              <p className="total-text">Total</p>
              <p className="total-price">${cartPrice}</p>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );

  renderCartAndForm = () => (
    <CartContext.Consumer>
      {(value) => {
        const onFormSubmitSuccess = () => {
          this.setState({ isOrderPlaced: true });
          const { resetCart } = value;
          resetCart();
        };

        return (
          <>
            {this.renderCartItems()}
            <UserDetailsForm onFormSuccess={onFormSubmitSuccess} />
          </>
        );
      }}
    </CartContext.Consumer>
  );

  renderOrderSuccessMessage = () => {
    return (
      <div className="success-message-container">
        <h1 className="order-success-message"> Your Order is Placed</h1>
        <Link to="/" className="nav-link">
          <button className="home-button">Go to Home</button>
        </Link>
      </div>
    );
  };

  render() {
    const { isOrderPlaced } = this.state;
    return (
      <>
        <div className="header-without-links-container">
          <div className="header-content-container">
            <div className="logo-container">
              <div className="logo">B</div>
              BOOKSTORE
            </div>
          </div>
        </div>
        <div className="checkout-container">
          <div className="checkout-content-container">
            {isOrderPlaced
              ? this.renderOrderSuccessMessage()
              : this.renderCartAndForm()}
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;
