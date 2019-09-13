import CollectionData from "redux/shop/shop.data";

const INITIAL_STATE = {
  collections: CollectionData
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
