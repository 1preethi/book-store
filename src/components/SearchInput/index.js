import { Component } from "react";
import "./index.css";

import { FaSearch } from "react-icons/fa";

class SearchInput extends Component {
  state = { SearchInputValue: "" };

  onChangeSearchInput = (event) => {
    this.setState({ SearchInputValue: event.target.value });
  };
  onClickSearchButton = (event) => {
    const { onSearchBooks } = this.props;
    event.preventDefault();
    onSearchBooks(this.state.SearchInputValue);
  };
  render() {
    const { value } = this.props;

    return (
      <form className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Search by Title"
          className="text-input"
          onChange={this.onChangeSearchInput}
        />
        <button className="search-button" onClick={this.onClickSearchButton}>
          <FaSearch className="search-icon" />
        </button>
      </form>
    );
  }
}

export default SearchInput;
