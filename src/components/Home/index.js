import { Component } from "react";
import Header from "../Header";
import {Link} from "react-router-dom"

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="banner-container">
          <div className="banner-content-container">
            <h1 className="banner-heading">Book Store</h1>
            <p className="banner-text">
              Bookstore was founded in 1992 with a simple yet passionate
              mission.To positively impact the world through the power of
              reading and learning. Right from our first store in Mumbai to the
              92 stores across 32 cities today, we have continued to serve and
              nurture our community of readers for over 3 decades.
            </p>

            <p className="banner-text">
              As India's leading bookstore retailer, we champion books and
              nourish a love for the written word through a rich, handpicked
              collection covering numerous topics. Our stores are thoughtfully
              designed with interiors that inspire and relax, allowing quiet
              spaces to help you discover great books.
            </p>
            <Link to="/books" className="nav-link">
              <button className="explore-button">Explore Books</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
