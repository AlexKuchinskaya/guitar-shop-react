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
import {calculate3000PercentageFromFinalPrice, calculatePriceWithTenPercentDiscount, formatPriceWithSpaces, returnGuitarPictureSmall} from '../utils/utils';
import { GuitarListPropType, ItemsInBasketPropType } from '../../types/types';
import { DISCOUNT_700, DISCOUNT_3000, GITARAHIT, SUPERGITARA, GITARA2020 } from '../const/const';
import PageNavigation from '../page-navigation/page-navigation';
import ModalBasket from '../modals/modalBasket';

const Basket = (props) => {
    const {guitars, idItemsInBasketList, currentBasketList, onAddtoBasketButtonClick, onDecreaseQuantityButtonClick, onFinalCostChange, finalCost, finalCostDiscount, onDeleteButtonClick} = props;
    const [coupon, setCoupon] = useState(``)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [isCouponWrong, setIsCouponWrong] = useState(false);

    const onIsModalOpenChange = (isModalOpenCallback) => {
        setIsModalDeleteOpen(isModalOpenCallback)
      }
      const [modalIndex, setModalIndex] = useState(null)

    const handleOnButtonPlusClick = (evt, guitarId) => {
        evt.preventDefault()
        onAddtoBasketButtonClick(currentBasketList + 1, guitarId)
    }

    const handleOnCouponInputChange = (evt) => {
        if (isCouponWrong === true) {
            setIsCouponWrong(false)
        }
        setCoupon(evt.target.value)
    }


    const handleOnAddCouponButtonClick = (evt) => {
        evt.preventDefault();
        let finalPriceWithDiscount;
        let percentage3000fromFinalPrice = calculate3000PercentageFromFinalPrice(finalCost)
        if (coupon === GITARAHIT) {
            finalPriceWithDiscount = calculatePriceWithTenPercentDiscount(finalCost);
            onFinalCostChange(finalPriceWithDiscount);
        } else if (coupon === SUPERGITARA) {
            finalPriceWithDiscount = finalCost - DISCOUNT_700; 
            onFinalCostChange(finalPriceWithDiscount);
        } else if (coupon === GITARA2020 && percentage3000fromFinalPrice < 30) {
            finalPriceWithDiscount = finalCost - DISCOUNT_3000; 
            onFinalCostChange(finalPriceWithDiscount);
        } else {
            setIsCouponWrong(true)
        }
    }
    // useEffect(() => {
    //     if (isModalDeleteOpen) {
    //       document.body.style.overflow = 'hidden';
    //     } else {
    //       document.body.style.overflow = 'unset';
    //     }
    //   }, [isModalDeleteOpen]);
    return <>
     <Header isMainPage={false}/>
     <main className="main main--basket">
        <h1 className="visually-hidden">Your Guitar Shop Basket</h1>
        <section className="basket container-site">
            <h2 className="title basket__title">Корзина</h2>
            <PageNavigation isBasket={true}/>
            <div className="guitars">
                <ul className="list guitars__list">
                    {guitars.map((guitarElement, index) => {
                        if (idItemsInBasketList.includes(guitarElement.id)) {
                            return <li key={guitarElement.id} className="guitars__item">
                                <button
                                    className="button guitar__button-delete"
                                    onClick={() => {
                                        setIsModalDeleteOpen(true)
                                        onDeleteButtonClick(guitarElement.id);
                                        setModalIndex(index)
                                        
                                    }}
                                >
                                    <CloseIcon />
                                </button>
                                <div className="guitars__container guitars__container--image">
                                    <img src={returnGuitarPictureSmall(guitarElement.type)} className="guitars__image" alt={guitarElement.name} height="128" width="56" />
                                </div>
                                <div className="guitars__container guitars__container--info">
                                    <h4 className="title guitars__guitar-title">{guitarElement.type} {guitarElement.name}</h4>
                                    <div className="guitars__wrapper">
                                        <p className="guitars__number">Артикул: {guitarElement.item}</p>
                                        <p className="guitars__info">{guitarElement.type}, {guitarElement.stringNumber} струнная </p>
                                    </div>
                                </div>
                                <div className="guitars__container guitars__container--price">
                                    <p className="guitars__price">{formatPriceWithSpaces(guitarElement.price)} ₽</p>
                                </div>
                                <div className="guitars__container guitars__container--input">
                                    <button type="button" className="button guitar__button guitar__button--minus" 
                                        onClick={(evt) => {
                                            evt.preventDefault()
                                            if (idItemsInBasketList.filter(item => item === guitarElement.id).length > 1) {
                                                onDecreaseQuantityButtonClick(currentBasketList - 1, guitarElement.id)
                                            } else {
                                                setIsModalDeleteOpen(true)
                                                setModalIndex(index)
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
                                    onChange={()=>{}}
                                    disabled={true}
                        
                                    />
                                    <button type="button" className="button guitar__button guitar__button--plus" 
                                    onClick={(evt) => handleOnButtonPlusClick(evt, guitarElement.id)}
                                    >
                                        <PlusIcon />
                                    </button>
                                </div>
                                <div className="guitars__container guitars__container--price">
                                    <p className="guitars__price guitars__price--quantity">{formatPriceWithSpaces(guitarElement.price * idItemsInBasketList.filter(item => item === guitarElement.id).length)} ₽</p>
                                </div>
                            </li>
                        }
                        return ``
                    })}
                </ul>
                <div className="basket__calculations">
                <div className="coupon">
                    <h3 className="coupon__title">Промокод на скидку</h3>
                    <label className="coupon__label" htmlFor="coupon">Введите свой промокод, если он у вас есть.</label>
                    {isCouponWrong ? 
                     <span className="coupon__wrong">Промокод не действителен<sup>*</sup></span> 
                     :
                     null
                    }
                    <div className="coupon__container">
                    <input
                        type="text"
                        id="coupon"
                        className={`coupon__input ${isCouponWrong ? `coupon__input--error` : ``}`}
                        placeholder={`ВАШ КУПОН`}
                        value={coupon}
                        onChange={handleOnCouponInputChange}
                    />
                     
                    <button 
                        type="button"
                        className="button button--grey coupon__button"
                        onClick={handleOnAddCouponButtonClick}
                    >Применить купон</button>
                    </div>
                
                </div>
                <div className="basket__total">
                <p className="basket__final-price">Всего: {finalCostDiscount} ₽ </p>
                <button className="button button--orange basket__submit" type="submit">Оформить заказ</button>
                </div>
            </div>
            </div>
            {isModalDeleteOpen ? <ModalBasket isDeleteFromBasket={true} isModalOpen={isModalDeleteOpen} guitarCard={guitars[modalIndex]} onIsModalOpenChange={onIsModalOpenChange}/> : ``}
        </section>
     </main>
     <Footer isMainPage={true}/>
    </>
}

const mapStateToProps = (state) => ({
    guitars: state.guitarList,
    idItemsInBasketList: state.idItemsInBasketList,
    currentBasketList: state.itemsInBasket,
    finalCost: state.finalCost,
    finalCostDiscount: state.finalCostDiscount,

});

const mapDispatchToProps = (dispatch) => ({
    onAddtoBasketButtonClick(guitarItem, id) {
      dispatch(ActionCreator.addToBasket(guitarItem, id));
    },
    onDecreaseQuantityButtonClick(guitarItem, id) {
        dispatch(ActionCreator.decreaseGuitarQuantity(guitarItem, id));
    },
    onFinalCostChange(price) {
        dispatch(ActionCreator.setFinalCostWithDiscount(price));
    },
    onDeleteButtonClick(id) {
        dispatch(ActionCreator.deleteFromBasket(id));
    },

  
});

Basket.propTypes = {
    guitars: GuitarListPropType,
    idItemsInBasketList: PropTypes.arrayOf(PropTypes.number),
    currentBasketList: ItemsInBasketPropType,
    onAddtoBasketButtonClick: PropTypes.func.isRequired,
    onDecreaseQuantityButtonClick: PropTypes.func.isRequired,
    onDeleteButtonClick: PropTypes.func.isRequired,
    onFinalCostChange: PropTypes.func.isRequired,
    finalCost: PropTypes.number.isRequired,
}
  
export {Basket};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);