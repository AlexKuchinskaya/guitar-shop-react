export const ActionType = {
    ADD_TO_BASKET: `guitars/addtobasket`,
    DELETE_FROM_BASKET: `guitars/deletefrombasket`
};
  
export const ActionCreator = {
    addToBasket: (guitar, id) => ({
        type: ActionType.ADD_TO_BASKET,
        payload: guitar,
        payloadTwo: id,
    }),
    deleteFromBasket: (guitar, id) => ({
        type: ActionType.DELETE_FROM_BASKET,
        payload: guitar,
        payloadTwo: id,
    }),
};