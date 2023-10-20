import { Link } from "react-router-dom";

import "./index.css";

const BookItem = (props) => {
  const { title, subtitle, isbn13, price, image } = props.bookItemDetails;
  return (
    <li key={isbn13} className="book-item-container">
      <Link to={`/books/${isbn13}`} className="nav-link">
        <img src={image} alt={title} className="book-image" />
        <h1 className="book-title">{title}</h1>
        <p className="book-text">{subtitle}</p>
        <p className="book-text">{price}</p>
      </Link>
    </li>
  );
};

export default BookItem;
