import React, {useEffect, useState, useRef} from 'react';
import AddToBasket from "./add-to-basket";
import AddedToBasket from "./added-to-basket";
import {ReactComponent as CloseFormIcon} from '../../img/icon-cross.svg';
import {returnFalseForCallBackFunction} from '../utils/utils';
import {ESC_KEY} from '../const/const';

const ModalBasket = ({guitarCard, onIsModalOpenChange}) => {
  const [isAddToBasket, setIsAddToBasket] = useState(true)
  const popUpRef = useRef();

  const onAddToBasketClick = (addToBasketCallback) => {
    const newIsAddToBasket = addToBasketCallback()
    setIsAddToBasket(newIsAddToBasket);
  }

  const onContinueBuyButtonClick = (evt, continueBuyCallback) => {
    if (!popUpRef.current.contains(evt.target)) {
      onIsModalOpenChange(continueBuyCallback);
    }
  }
  const closePopUp = () => {
    onIsModalOpenChange(returnFalseForCallBackFunction)
  } 

  let handleMousedownPopUp = (evt) => {
    if (!popUpRef.current.contains(evt.target)) {
      closePopUp();
    }
  };

  const handleEscapeKeyPopUp = (evt) => {
    if (evt.key === ESC_KEY) {
      closePopUp();
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleEscapeKeyPopUp);
    document.addEventListener(`mousedown`, handleMousedownPopUp);
    return () => {
      document.removeEventListener(`mousedown`, handleMousedownPopUp);
      document.removeEventListener(`keydown`, handleEscapeKeyPopUp);
    };
  });

    return (
      <div className="modal modal--show">
        <div ref={popUpRef} className="modal__main">
          <h3 className="title modal__title">{isAddToBasket? `Добавить товар в корзину` : `Товар успешно добавлен в корзину`}</h3>
          <div className="modal__wrapper">
              {isAddToBasket ?
                <AddToBasket guitarCard={guitarCard} onAddToBasketClick={onAddToBasketClick}/>
                :
                <AddedToBasket onContinueBuyButtonClick={onContinueBuyButtonClick}/>
            
            }
          </div>
          <button
            className="button modal__button-close"
            onClick={closePopUp}
          >
            <CloseFormIcon />
        </button>
        </div>
      </div>
    )
};
  
export default ModalBasket;