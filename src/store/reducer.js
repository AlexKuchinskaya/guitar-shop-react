import { ActionType } from "./action";

const { mocks } = require("../components/mocks/mock");


const initialState = {
    guitarList: mocks,
    itemsInBasket: 0,
    idItemsInBasketList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.ADD_TO_BASKET:
        return {
          ...state,
          itemsInBasket: action.payload,
          idItemsInBasketList: [
            ...state.idItemsInBasketList,
            action.payloadTwo,
          ],
        };
      default:
        return state;
    }
  
  };
  
  export {reducer};