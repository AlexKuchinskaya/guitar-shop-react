import { DISCOUNT_10, DISCOUNT_3000, GuitarTypes } from "../const/const";

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



  export const returnFalseForCallBackFunction = () => {
    return false
}

export const returnGuitarPictureSmall = (guitarType) => {
    switch (guitarType) {
      case GuitarTypes.ACOUSTIC:
        return '../../img/acoustic-small.png';
      case GuitarTypes.ELECTRO:
        return  '../../img/electro-small.png';
      case GuitarTypes.UKULELE:
        return '../../img/ukulele-small.png';
      default:
        return ``;
    }
  }

export  const calculatePriceWithTenPercentDiscount = (priceToApply) => {
    return priceToApply - ((priceToApply * DISCOUNT_10) / 100)
}

export const calculate3000PercentageFromFinalPrice = (finalPrice) => {
    return (DISCOUNT_3000 * 100) / finalPrice;
}