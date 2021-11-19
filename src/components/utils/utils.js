export const formatPriceWithSpaces = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const sortTripsByPrice = (cardA, cardB) => {
    return cardB.price - cardA.price;
};