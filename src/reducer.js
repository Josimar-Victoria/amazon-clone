export const initialState = {
  basket: [],
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_FROM_BASKET",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPING_DATA: "SET_SHIPPING_DATA",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBsasket = [...state.basket];
      const index = state.basket.findIndex(
        (baskeItem) => baskeItem.id === action.id
      );
      if (index >= 0) {
        newBsasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product(id: ${action.id})`);
      }
      return {
        ...state,
        basket: newBsasket,
      };
    default:
      return state;
  }
};
export default reducer;
