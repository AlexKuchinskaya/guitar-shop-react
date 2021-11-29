import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import { returnFalseForCallBackFunction } from '../utils/utils';
import './modal.scss';

const AddToBasket = ({guitarCard, currentbasketState, onAddToBasketClick, onAddtoBasketButtonClick}) => {
    const handleAddToBasket = () => {

        onAddToBasketClick(returnFalseForCallBackFunction)
        onAddtoBasketButtonClick(currentbasketState + 1, guitarCard.id)
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

const mapStateToProps = (state) => ({
    currentbasketState: state.itemsInBasket,
  });
const mapDispatchToProps = (dispatch) => ({
    onAddtoBasketButtonClick(guitarItem, id) {
      dispatch(ActionCreator.addToBasket(guitarItem, id));
    },
  
});
export {AddToBasket};
export default connect(mapStateToProps, mapDispatchToProps)(AddToBasket);