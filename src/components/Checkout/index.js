import "./index.css";
import CartContext from "../../context/CartContext";

import UserDetailsForm from "../UserDetailsForm";

const Checkout = () => (
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
        <>
          <div className="header-without-links-container">
            <div className="header-content-container">
              <div className="logo-container">
                <div className="logo">C</div>
                CROSSWORD
              </div>
            </div>
          </div>
          <div className="checkout-container">
            <div className="checkout-content-container">
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
                          <p className="checkout-cart-text">
                            {eachCartItem.title}
                          </p>
                        </div>
                        <p className="checkout-cart-text">
                          {eachCartItem.price}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div className="total-container">
                  <p className="total-text">Total</p>
                  <p className="total-price">${cartPrice}</p>
                </div>
              </div>
              <UserDetailsForm />
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Checkout
