import { ActionType } from "./action";

const { mocks } = require("../components/mocks/mock");


const initialState = {
    guitarList: mocks,
    itemsInBasket: 0,
    idItemsInBasketList: [],
    finalCostDiscount: 0,
    finalCost: 0,
}

const getFinalCost = (idItemsInBasket, guitars) => {
  let finalPrice = idItemsInBasket.reduce((totalPricePrevious, guitarIdCurrent) => {
      let actualPrice = guitars.filter((guitar) => guitar.id === guitarIdCurrent)[0].price;
      return totalPricePrevious + actualPrice;

  },0)
  return finalPrice
}
const getFinalGuitarCost = (guitarId, guitars) => {
  return guitars.filter((guitar) => guitar.id === guitarId)[0].price;
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
          itemsInBasket: state.itemsInBasket + 1,
          idItemsInBasketList: [
            ...state.idItemsInBasketList,
            action.payloadTwo,
          ],
          finalCost: state.finalCost + getFinalGuitarCost(action.payloadTwo, state.guitarList),
          finalCostDiscount: state.finalCost + getFinalGuitarCost(action.payloadTwo, state.guitarList)
        };
        case ActionType.DECREASE_GUITAR_QUANTITY:
        return {
          ...state,
          itemsInBasket: action.payload,
          idItemsInBasketList: checkArrayForElement(state.idItemsInBasketList, action.payloadTwo),
          finalCost: state.finalCost - getFinalGuitarCost(action.payloadTwo, state.guitarList),
          finalCostDiscount: state.finalCost - getFinalGuitarCost(action.payloadTwo, state.guitarList)
        };
        case ActionType.SET_FINAL_COST:
        return {
          ...state,
          finalCostDiscount: action.payload
        };
        case ActionType.DELETE_FROM_BASKET:
        return {
          ...state,
          itemsInBasket: state.idItemsInBasketList.filter((idItem) => idItem !== action.payload).length,
          idItemsInBasketList: state.idItemsInBasketList.filter((idItem) => idItem !== action.payload),
          finalCost: state.finalCost - (getFinalGuitarCost(action.payload, state.guitarList) * state.guitarList.filter((guitar) => guitar.id === action.payload).length),

        };
      default:
        return state;
    }
  
  };
  
  export {reducer};