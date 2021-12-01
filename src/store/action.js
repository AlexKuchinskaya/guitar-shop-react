export const ActionType = {
    ADD_TO_BASKET: `guitars/addtobasket`,
    DELETE_FROM_BASKET: `guitars/deletefrombasket`,
    DECREASE_GUITAR_QUANTITY: `guitars/decreaseguitarquantity`,
    SET_FINAL_COST: `guitars/setfinalcost`,

};
  
export const ActionCreator = {
    addToBasket: (guitar, id) => ({
        type: ActionType.ADD_TO_BASKET,
        payload: guitar,
        payloadTwo: id,
    }),
    decreaseGuitarQuantity: (guitar, id) => ({
        type: ActionType.DECREASE_GUITAR_QUANTITY,
        payload: guitar,
        payloadTwo: id,
    }),
    setFinalCost: (price) => ({
        type: ActionType.SET_FINAL_COST,
        payload: price,
    }),
    deleteFromBasket: (id) => ({
        type: ActionType.DELETE_FROM_BASKET,
        payload: id,
    }),
};