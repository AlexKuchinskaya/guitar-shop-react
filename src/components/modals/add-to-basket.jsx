import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {returnFalseForCallBackFunction, returnGuitarPictureSmall} from '../utils/utils';
import './modal.scss';

const AddToBasket = ({isDeleteFromBasket, guitarCard, currentbasketState, onAddToBasketClick, onAddtoBasketButtonClick, idItemsInBasketList, onContinueBuyButtonClick, onDeleteFromBasketClick }) => {
    const handleAddToBasket = () => {
        onAddToBasketClick(returnFalseForCallBackFunction)
        onAddtoBasketButtonClick(currentbasketState + 1, guitarCard.id)
        
    }
    const handleDeleteFromBasket = (evt, guitarId) => {
        evt.preventDefault();
        onDeleteFromBasketClick(guitarId)
        onContinueBuyButtonClick(returnFalseForCallBackFunction)
    }
    const handleOnContinueBuyClick = () => {
        onContinueBuyButtonClick(returnFalseForCallBackFunction)
    }
  return <>
            <h3 className="title modal__title">{isDeleteFromBasket? `Удалить этот товар?` : `Добавить товар в корзину`}</h3>
            <div className="modal__flex">
            <div className="modal__container">
                <div className="modal__image">
                    <img src={returnGuitarPictureSmall(guitarCard.type)} className="modal__guitar-image" alt={guitarCard.name} height="128" width="56" />
                </div>
                <div className="modal__text">
                    <h4 className="title modal__guitar-title">Гитара {guitarCard.name}</h4>
                    <div className="modal__guitar">
                        <p className="modal__item">Артикул: {guitarCard.item}</p>
                        <p className="modal__item">{guitarCard.type}, {guitarCard.stringNumber} струнная </p>
                    </div>
                    <p className="modal__price">Цена: {guitarCard.price} ₽</p>
                </div>
            </div>
            <div className="modal__buttons-wrapper">
            {isDeleteFromBasket 
            ?
                <>
                <button
                className="button button--orange modal__button"
                onClick={(evt) => handleDeleteFromBasket(evt, guitarCard.id)}
            >
            Удалить товар
            </button>
                <button
                    type="button"
                    className="button button--transparent modal__button modal__button--continue"
                    onClick={handleOnContinueBuyClick}
                >Продолжить покупки</button>
            </>
            : 
            <button
            className="button button--orange modal__button"
            onClick={handleAddToBasket}
            >
            Добавить в корзину
            </button>
            }
             </div>
            </div>
            
  </>
};

const mapStateToProps = (state) => ({
    currentbasketState: state.itemsInBasket,
    idItemsInBasketList: state.idItemsInBasketList,
  });
const mapDispatchToProps = (dispatch) => ({
    onAddtoBasketButtonClick(guitarItem, id) {
      dispatch(ActionCreator.addToBasket(guitarItem, id));
    },
    onDeleteFromBasketClick(id) {
        dispatch(ActionCreator.deleteFromBasket(id));
      },
  
});
export {AddToBasket};
export default connect(mapStateToProps, mapDispatchToProps)(AddToBasket);