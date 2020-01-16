import React from "react";
import { shallow } from "enzyme";
import CartIcon from "./cart-icon";
import { CartIconContainer } from "./cart-icon.style";
import { toggleCartHidden } from "redux/cart/cart.action";

describe("Cart Icon", () => {
  let wrapper;
  let mockDispatch;
  let mockItemCount = 0;

  beforeEach(() => {
    mockDispatch = jest.fn();

    const mockProps = {
      itemCount: mockItemCount,
      dispach: mockDispatch
    };

    wrapper = shallow(<CartIcon.WrappedComponent {...mockProps} />);
  });

  it("expect Cart Icon to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
