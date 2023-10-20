import React, { Component } from "react";
import "./index.css";

class UserDetailsForm extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: 0,
    isFormSubmitted: false,
  };

  onSubmitForm = (event) => {};
  onChangeNameInput = (event) => {
    const { value } = this.state;
    this.setState({ });
  };
  onChangeAddressInput = (event) => {};
  onChangeEmailInput = (event) => {};
  onChangePhoneInput = (event) => {};

  render() {
    return (
      <form
        className="user-details-form-container"
        onSubmit={this.onSubmitForm}
      >
        <h1 className="user-details-form-heading">Shipping Address</h1>
        <input
          type="text"
          placeholder="Name"
          required
          className="user-input"
          onChange={this.onChangeNameInput}
        />
        <textarea
          placeholder="Address"
          required
          className="user-input"
          onChange={this.onChangeAddressInput}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="user-input"
          onChange={this.onChangeEmailInput}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="user-input"
          onChange={this.onChangePhoneInput}
        />
        <button className="place-order-button">Place Order</button>
        <p className="shipping-note">Only Cash on Delivery is Available</p>
      </form>
    );
  }
}

export default UserDetailsForm;
