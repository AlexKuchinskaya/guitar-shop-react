import React, {useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import AddToBasket from "./add-to-basket";
import AddedToBasket from "./added-to-basket";
import {ReactComponent as CloseFormIcon} from '../../img/icon-cross.svg';
import {returnFalseForCallBackFunction} from '../utils/utils';
import {ESC_KEY} from '../const/const';
import { GuitarPropType } from '../../types/types';
import FocusTrap from 'focus-trap-react'

const ModalBasket = ({isDeleteFromBasket, isModalOpen, guitarCard, onIsModalOpenChange}) => {
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
      <FocusTrap active={isModalOpen}>
      <div id="address-modal" aria-modal="true" className="modal modal--show">
        <div ref={popUpRef} className="modal__main">
          <div className="modal__wrapper">
              {isAddToBasket ?
                <AddToBasket isDeleteFromBasket={isDeleteFromBasket} guitarCard={guitarCard} onAddToBasketClick={onAddToBasketClick} onContinueBuyButtonClick={onContinueBuyButtonClick}/>
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
      </FocusTrap>
    )
};

ModalBasket.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  guitarCard: GuitarPropType, 
  onIsModalOpenChange: PropTypes.func.isRequired,
}

export default ModalBasket;