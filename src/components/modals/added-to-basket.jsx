import {Link} from "react-router-dom";
import { Routes } from '../const/const';
import { returnFalseForCallBackFunction } from "../utils/utils";
const AddedToBasket = ({onContinueBuyButtonClick}) => {
    const handleOnContinueBuyClick = () => {
        onContinueBuyButtonClick(returnFalseForCallBackFunction)
    }
     return <>
        <Link to={Routes.MY_BASKET} className="button modal__button">Перейти в корзину</Link>
        <button
            type="button"
            className="button modal__button modal__button--basket"
            onClick={handleOnContinueBuyClick}
        >Продолжить покупки</button>
    </>
};
   
export default AddedToBasket;