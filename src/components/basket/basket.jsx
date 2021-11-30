import {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import Header from '../header/header';
import Footer from '../footer/footer';
import {ActionCreator} from '../../store/action';
import {ReactComponent as CloseIcon} from '../../img/icon-cross.svg';
import {ReactComponent as MinusIcon} from '../../img/minus-icon.svg';
import {ReactComponent as PlusIcon} from '../../img/plus-icon.svg';
import './basket.scss';
import {returnGuitarPictureSmall} from '../utils/utils';
import { GuitarListPropType, ItemsInBasketPropType } from '../../types/types';

const Basket = (props) => {
    const {guitars, idItemsInBasketList, currentBasketList, onAddtoBasketButtonClick, onDeleteFromBasketButtonClick} = props;
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    console.log(`idItemsInBasketList`, idItemsInBasketList)
    const handleOnButtonPlusClick = (evt, guitarId) => {
        evt.preventDefault()
        onAddtoBasketButtonClick(currentBasketList + 1, guitarId)
    }
    const handleOnButtonMinusClick = (evt, guitarId) => {
        console.log(`guitarId`, guitarId)
        evt.preventDefault()
        onDeleteFromBasketButtonClick(currentBasketList - 1, guitarId)
    }
    return <>
     <Header isMainPage={false}/>
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop Basket</h1>
        <section className="basket container-site">
            <h2 className="title basket__title">Корзина</h2>
            <div className="guitars">
                <ul className="list guitars__list">
                    {guitars.map((guitarElement) => {
                        if (idItemsInBasketList.includes(guitarElement.id)) {
                            return <li key={guitarElement.id} className="guitars__item">
                                <button
                                    className="button guitar__button-delete"
                                    // onClick={closePopUp}
                                >
                                    <CloseIcon />
                                </button>
                                <div className="guitars__container">
                                    <img src={returnGuitarPictureSmall(guitarElement.type)} className="guitars__image" alt={guitarElement.name} height="128" width="56" />
                                </div>
                                <div className="guitars__container guitars__container--info">
                                    <h4 className="title guitars__guitar-title">{guitarElement.type} {guitarElement.name}</h4>
                                    <div className="guitars__wrapper">
                                        <p className="guitars__number">Артикул: {guitarElement.item}</p>
                                        <p className="guitars__info">{guitarElement.type}, {guitarElement.stringNumber} струнная </p>
                                    </div>
                                </div>
                                <div className="guitars__container">
                                    <p className="guitars__price">{guitarElement.price} ₽</p>
                                </div>
                                <div className="guitars__container guitars__container--input">
                                    <button type="button" className="button guitar__button guitar__button--minus" 
                                        onClick={(evt) => {
                                            evt.preventDefault()
                                            if (idItemsInBasketList.filter(item => item === guitarElement.id).length > 1) {
                                                onDeleteFromBasketButtonClick(currentBasketList - 1, guitarElement.id)
                                            } else {
                                                console.log(`down to 1`)
                                                setIsModalDeleteOpen(true)
                                            }
                                            
                                        }}
                                    >
                                    <MinusIcon />
                                    </button>
                                   <label className="guitars__label" htmlFor="quantity"></label>
                                   <input
                                    type="number"
                                    className="guitars__input"
                                    id="quantity"
                                    value={idItemsInBasketList.filter(item => item === guitarElement.id).length}
                                    // onChange={handleOnChangeQuantity} 
                                    // onBlur={handleInputQuantityOnBlur}
                                    />
                                    <button type="button" className="button guitar__button guitar__button--plus" 
                                    onClick={(evt) => handleOnButtonPlusClick(evt, guitarElement.id)}
                                    >
                                        <PlusIcon />
                                    </button>
                                </div>
                                <div className="guitars__container">
                                    <p className="guitars__price guitars__price--quantity">{guitarElement.price} ₽</p>
                                </div>
                            </li>
                        }
                        return ``
                    })}
                </ul>
                <div className="promo">
                    <h3 className="promo__title">Промокод на скидку</h3>
                    <p className="promo__in">Введите свой промокод, если он у вас есть.</p>
                    <label></label>
                    <input type="text"/>
                    <button>Применить купон</button>
                </div>
                <p>Всего: ₽ </p>
                <button type="submit">Оформить заказ</button>
            </div>
        </section>
     </main>
     <Footer isMainPage={true}/>
    </>
}

const mapStateToProps = (state) => ({
    guitars: state.guitarList,
    idItemsInBasketList: state.idItemsInBasketList,
    currentBasketList: state.itemsInBasket,

});

const mapDispatchToProps = (dispatch) => ({
    onAddtoBasketButtonClick(guitarItem, id) {
      dispatch(ActionCreator.addToBasket(guitarItem, id));
    },
    onDeleteFromBasketButtonClick(guitarItem, id) {
        dispatch(ActionCreator.deleteFromBasket(guitarItem, id));
      },
  
});

Basket.propTypes = {
    guitars: GuitarListPropType,
    idItemsInBasketList: PropTypes.arrayOf(PropTypes.number),
    currentBasketList: ItemsInBasketPropType,
    onAddtoBasketButtonClick: PropTypes.func.isRequired,
    onDeleteFromBasketButtonClick: PropTypes.func.isRequired,
}
  
export {Basket};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);