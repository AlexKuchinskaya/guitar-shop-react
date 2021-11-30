import { ActionType } from "./action";

const { mocks } = require("../components/mocks/mock");


const initialState = {
    guitarList: mocks,
    itemsInBasket: 0,
    idItemsInBasketList: [],
    finalCost: 47000,
}

const checkArrayForElement = (elementList, elementToCompare) => {
    let index = elementList.indexOf(elementToCompare);
    if (index > -1) {
        elementList.splice(index, 1);
    }
    return elementList
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
        case ActionType.DELETE_FROM_BASKET:
        return {
          ...state,
          itemsInBasket: action.payload,
          idItemsInBasketList: checkArrayForElement(state.idItemsInBasketList, action.payloadTwo)
        };
        case ActionType.SET_FINAL_COST:
        return {
          ...state,
          finalCost: action.payload,
        };
      default:
        return state;
    }
  
  };
  
  export {reducer};