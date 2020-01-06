import React from "react";
import { shallow } from "enzyme";
import CartDropdown from "./cart-dropdown.jsx";
import CartItem from "components/cart-item/cart-item";
import { toggleCartHidden } from "redux/cart/cart.action";

describe("Cart Dropdown", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown />);
  });

  // it("should render cart dropdown component", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it("should call history.push when button is clicked", () => {
  //   // wrapper.find("DropdownButton").simulate("click");
  //   // expect(wrapper.find("DropdownButton").length).toEqual(1);
  //   // expect(mockHistory.push).toHaveBeenCalled();
  //   // expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  // });

  it("should render cart item length equals to mock item length", () => {
    console.log(wrapper);
    expect(wrapper.find("DropdownButton").length).toEqual(1);
  });
});
