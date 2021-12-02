import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Routes} from '../const/const';
import {returnFalseForCallBackFunction} from "../utils/utils";

const AddedToBasket = ({onContinueBuyButtonClick}) => {
  const handleOnContinueBuyClick = () => {
    onContinueBuyButtonClick(returnFalseForCallBackFunction);
  };
  return <>
    <h3 className="title modal__title">Товар успешно добавлен в корзину</h3>
    <div className="modal__flex modal__flex--added">
      <Link to={Routes.MY_BASKET} className="link-site button button--orange modal__button--basket">Перейти в корзину</Link>
      <button
        type="button"
        className="button button--transparent modal__button modal__button--continue"
        onClick={handleOnContinueBuyClick}
      >Продолжить покупки
      </button>
    </div>
  </>;
};

AddedToBasket.propTypes = {
  onContinueBuyButtonClick: PropTypes.func.isRequired,
};

export default AddedToBasket;
