import React from "react";
import Spinner from "components/spinner/spinner";

const WithSpinner = WrappedComponent => ({ isLoading, ...rest }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...rest} />;

export default WithSpinner;
