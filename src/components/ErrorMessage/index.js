import "./index.css";
const ErrorMessage = () => {
  return (
    <div className="error-message-container">
      <h1 className="error-heading">Oops! Something Went Wrong</h1>
      <p className="error-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );
};

export default ErrorMessage;
