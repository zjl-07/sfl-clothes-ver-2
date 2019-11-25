import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageDesc
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    //before commit phase
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    //after commit phase
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
        <ErrorImageContainer
          imageUrl={"https://i.imgur.com/QIxIKBH.png"}
        ></ErrorImageContainer>
        <ErrorImageText>This Page is a Ghost</ErrorImageText>
        <ErrorImageDesc>
          Once alive and now dead, this ghost appears to have some unfinished
          business. Could it be with you? Or the treasure hidden under the
          floorboards of the old mansion in the hills that may never reach its
          rightful owner, a compassionate school teacher in Brooklyn.
        </ErrorImageDesc>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
