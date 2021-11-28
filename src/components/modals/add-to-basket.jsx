import React from 'react';
import { returnFalseForCallBackFunction } from '../utils/utils';
import './modal.scss';

const AddToBasket = ({guitarCard, onAddToBasketClick}) => {
    const handleAddToBasket = () => {

        onAddToBasketClick(returnFalseForCallBackFunction)
        //add logic of change number in header
        //add logic of add an item to basket page
    }
  return <>
            <div className="modal__container">
                <div className="modal__image">
                    {/* <img src={returnGuitarPicture(mockGuitar.type)} className="modal__guitar-image" alt={mockGuitar.name} height="128" width="56" /> */}
                </div>
                <div>
                    <h4 className="title modal__guitar-title">{guitarCard.name}</h4>
                    <div>
                        <p className="">Артикул: {guitarCard.item}</p>
                        <p>{guitarCard.type}, {guitarCard.stringNumber} струнная </p>
                    </div>
                    <p className="modal__price">Цена: {guitarCard.price} ₽</p>
                </div>
            </div>
            <button
            className="button modal__button"
            onClick={handleAddToBasket}
            >
            Добавить в корзину
            </button>
  </>
};

export default AddToBasket;