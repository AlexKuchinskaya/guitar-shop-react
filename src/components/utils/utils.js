export const formatPriceWithSpaces = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const sortGuitarsByPrice = (cardA, cardB) => {
    return cardA.price - cardB.price;
};

export const sortGuitarsByReviews = (cardA, cardB) => {
    return cardA.reviewNumber - cardB.reviewNumber;
};