import React from "react";
import { shallow } from "enzyme";
import Button from "./button";

it("should render button component", () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});
