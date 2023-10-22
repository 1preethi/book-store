import { Component } from "react";
import Header from "../Header";
import "./index.css";

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="not-found-container">
          <h1 className="not-found-text">Page Not Found</h1>
        </div>
      </>
    );
  }
}

export default NotFound;
