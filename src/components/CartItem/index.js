import { FaTrashAlt } from "react-icons/fa";
import "./index.css";

import CartContext from '../../context/CartContext'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteFromCart} = value
      const {cartItemDetails} = props
      const { isbn13, image, title, price } = cartItemDetails;

      const onDeleteCartItem = () => {
        deleteFromCart(isbn13)
      }
      return (
        <li className="cart-item-container" key={title}>
        <div className="cart-item-content-container">
          <div className="cart-details-container">
            <img src={image} alt={title} className="cart-item-image" />
            <h1 className="cart-item-heading">{title}</h1>
          </div>
          <div className="cart-more-details-container">
            <h1 className="cart-item-heading">{price}</h1>
            <button className="delete-button" onClick={onDeleteCartItem}>
              <FaTrashAlt className="delete-icon" />
            </button>
          </div>
        </div>
      </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
