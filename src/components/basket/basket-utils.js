import { GuitarTypes } from "../const/const";

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