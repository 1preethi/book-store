import { Component } from "react";
import Header from "../Header";
import CartContext from "../../context/CartContext";
import LoaderContainer from "../LoaderContainer";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class BookDetails extends Component {
  state = {
    bookDetailsData: {},
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getBookDetailsData();
  }

  getBookDetailsData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const apiUrl = `https://api.itbook.store/1.0/books/${id}`;
    const response = await fetch(apiUrl);
    if (response.ok) {
      const fetchedData = await response.json();

      this.setState({
        bookDetailsData: fetchedData,
        apiStatus: apiStatusConstants.success,
      });
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  renderBookDetailsView = () => (
    <CartContext.Consumer>
      {(value) => {
        const {
          title,
          subtitle,
          authors,
          publisher,
          language,
          isbn10,
          isbn13,
          pages,
          year,
          rating,
          price,
          desc,
          image,
        } = this.state.bookDetailsData;

        const { addToCart } = value;

        const onClickAddToCart = () => {
          addToCart({ ...this.state.bookDetailsData });
        };

        return (
          <div className="book-details-container">
            <div className="book-details-content-container">
              <div className="book-basic-details-container">
                <div className="book-details-image">
                  <img src={image} alt={title} />
                </div>
                <div className="book-other-basic-details">
                  <h1 className="book-details-heading book-details-title">
                    {title}
                  </h1>
                  <p className="book-details-subtitle">{subtitle}</p>
                  <p className="book-details-author">{authors}</p>
                  <p className="book-details-release-year">
                    Release Year: {year}
                  </p>
                  <hr className="horizontal-rule display" />
                  <p className="book-details-price">{price}</p>
                  <div className="buttons-container">
                    <button
                      className="book-details-button"
                      onClick={onClickAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <hr className="horizontal-rule" />
              <div>
                <h1 className="book-details-heading">Product Description</h1>
                <p>{desc}</p>
              </div>
              <hr className="horizontal-rule" />
              <div>
                <h1 className="book-details-heading">Product Details</h1>
                <table>
                  <tbody>
                    <tr>
                      <th>Title:</th>
                      <td>{title}</td>
                    </tr>
                    <tr>
                      <th>Subtitle:</th>
                      <td>{subtitle}</td>
                    </tr>
                    <tr>
                      <th>Authors</th>
                      <td>{authors}</td>
                    </tr>
                    <tr>
                      <th>Publisher</th>
                      <td>{publisher}</td>
                    </tr>
                    <tr>
                      <th>Language</th>
                      <td>{language}</td>
                    </tr>
                    <tr>
                      <th>Isbn10</th>
                      <td>{isbn10}</td>
                    </tr>
                    <tr>
                      <th>Isbn13</th>
                      <td>{isbn13}</td>
                    </tr>
                    <tr>
                      <th>Pages</th>
                      <td>{pages}</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>{year}</td>
                    </tr>
                    <tr>
                      <th>Rating</th>
                      <td>{rating}</td>
                    </tr>
                    <tr>
                      <th>Price</th>
                      <td>{price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
    </CartContext.Consumer>
  );

  renderLoadingView = () => {
    return <LoaderContainer />;
  };

  renderBookDetails = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderBookDetailsView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        {this.renderBookDetails()}
      </>
    );
  }
}

export default BookDetails;
