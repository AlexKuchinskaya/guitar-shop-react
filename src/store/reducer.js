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
          ...state, // деструктурируем предыдущее состояние
          itemsInBasket: action.payload,// меняем тот ключ который нужно поменять и возвращаем новый объект
          idItemsInBasketList: action.payloadTwo
        };
  
    //   case .GET_NEW_FILMLIST_BY_GENRE:
    //     return {
    //       ...state,
    //       filmList: state.filmList
    //     };
      default:
        return state;
    }
  
  };
  
  export {reducer};