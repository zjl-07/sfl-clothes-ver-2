import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.style";

const withSpinner = WrappedComponent => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...rest} />
  );
};
export default withSpinner;
