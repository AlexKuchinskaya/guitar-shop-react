export const ActionType = {
    ADD_TO_BASKET: `guitars/addtobasket`,
    // GET_NEW_FILMLIST_BY_GENRE: `guitars/getnewfilmlistbygenre`,
  };
  
  export const ActionCreator = {
    addToBasket: (guitar, id) => ({
      type: ActionType.ADD_TO_BASKET,
      payload: guitar,
      payloadTwo: id,
    }),
  };