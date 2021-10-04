export const initialState = {
  basket: [],
};

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_FROM_BASKET",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
    SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
}

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      break;
    case "REMOVE_FROM_BASKET":
      break;
    default:
      return state;
  }
}
