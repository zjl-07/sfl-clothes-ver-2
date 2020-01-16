import React from "react";
import { shallow } from "enzyme";
import CartDropdown from "./cart-dropdown.jsx";
import CartItem from "components/cart-item/cart-item";
import { DropdownButton, MessageContainer } from "./cart-dropdown.style";
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

    wrapper = shallow(<CartDropdown.WrappedComponent {...mockProps} />);
  });

  it("should render cart dropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when button is clicked", () => {
    wrapper.find(DropdownButton).simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it("should render cart item length equals to mock item length", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it("expecting cart item component to render message containe", () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(
      <CartDropdown.WrappedComponent {...mockProps} />
    );

    expect(newWrapper.exists(MessageContainer)).toBe(true);
  });
});
