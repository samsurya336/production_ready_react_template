import React from "react";
import LogRocket from "logrocket";
import Button from "../Button/Button";
import errorBoundaryFallBack from "../../assets/errorBoundaryFallBack.svg";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
    window.gtag("event", "exception", {
      code: error.code,
      userType: this.props.userType,
      message: error.message,
      fatal: true
    });
    LogRocket.captureMessage(error.message, {
      tags: {
        userType: this.props.userType
      },
      extra: {
        fatal: true,
        code: error.code
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="inherit-parent-height inherit-parent-width flex-place-children-page-center">
          <div className="">
            <img
              src={errorBoundaryFallBack}
              className="error-fallback-image-height"
              alt="error-fallback"
              width="auto"
            />
            <div className="text-align-center font-family-gilroy-bold font-size-medium padding-vertical-larger">
              Something's broken
            </div>
            <Button
              boxShadow={false}
              text="Take me back"
              onClick={this.props.onClick}
            />
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
