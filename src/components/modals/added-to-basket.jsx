import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { Routes } from '../const/const';
import { returnFalseForCallBackFunction } from "../utils/utils";

const AddedToBasket = ({onContinueBuyButtonClick}) => {
    const handleOnContinueBuyClick = () => {
        onContinueBuyButtonClick(returnFalseForCallBackFunction)
    }
     return <>
        <Link to={Routes.MY_BASKET} className="button button--orange modal__button--basket">Перейти в корзину</Link>
        <button
            type="button"
            className="button button--transparent modal__button modal__button--continue"
            onClick={handleOnContinueBuyClick}
        >Продолжить покупки</button>
    </>
};

AddedToBasket.propTypes = {
    onContinueBuyButtonClick: PropTypes.func.isRequired,
}

export default AddedToBasket;