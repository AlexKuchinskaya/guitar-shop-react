export const formatPriceWithSpaces = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const sortGuitarsByPriceFromLowestToHighest = (cardA, cardB) => {
    return cardA.price - cardB.price;
};

export const sortGuitarsByPriceFromHighestToLowest = (cardA, cardB) => {
    return cardB.price - cardA.price;
};

export const sortGuitarsByReviewsFromLowestToHighest = (cardA, cardB) => {
    return cardA.reviewNumber - cardB.reviewNumber;
};

export const sortGuitarsByReviewsFromHighestToLowest = (cardA, cardB) => {
    return cardB.reviewNumber - cardA.reviewNumber;
};