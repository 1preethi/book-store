import React, { Component } from "react";
import "./index.css";

class UserDetailsForm extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    phone: "",
    showErrorMessage: false,
  };

  isInputsValid = () => {
    const { name, address, email, phone } = this.state;
    const userDetails = { name, address, email, phone };

    const isValidPhone = (phone) => Number(phone) && phone.length === 10;
    const isNotEmpty = (value) => value.length > 0;

    let isValid = true;
    for (const [property, value] of Object.entries(userDetails)) {
      if (property === "phone" && !isValidPhone(value)) {
        isValid = false;
        break;
      }

      if (property !== "phone" && !isNotEmpty(value)) {
        isValid = false;
      }
    }
    return isValid;
  };

  onSubmitForm = (event) => {
    const { onFormSuccess } = this.props;
    event.preventDefault();
    const isInputsValid = this.isInputsValid();
    if (isInputsValid) {
      onFormSuccess();
    } else {
      this.setState({ showErrorMessage: true });
    }
  };
  onChangeNameInput = (event) => {
    this.setState({ name: event.target.value });
  };
  onChangeAddressInput = (event) => {
    this.setState({ address: event.target.value });
  };
  onChangeEmailInput = (event) => {
    this.setState({ email: event.target.value });
  };
  onChangePhoneInput = (event) => {
    this.setState({ phone: event.target.value });
  };

  render() {
    const { showErrorMessage } = this.state;
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
        {showErrorMessage && (
          <p className="error-message">Please enter valid details</p>
        )}
      </form>
    );
  }
}

export default UserDetailsForm;
