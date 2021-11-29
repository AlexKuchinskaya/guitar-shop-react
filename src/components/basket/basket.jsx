import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import {ReactComponent as CloseIcon} from '../../img/icon-cross.svg';
import {ReactComponent as MinusIcon} from '../../img/minus-icon.svg';
import {ReactComponent as PlusIcon} from '../../img/plus-icon.svg';
import './basket.scss';
import { returnGuitarPictureSmall } from './basket-utils';

const Basket = (props) => {
    const {guitars, idItemsInBasketList} = props;
    console.log(`idItemsInBasketList`, idItemsInBasketList)
    return <>
     <Header />
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop Basket</h1>
        <section className="basket container-site">
            <h2 className="title basket__title">Корзина</h2>
            <div className="guitars">
                <ul className="list guitars__list">
                    {guitars.map((guitarElement) => {
                        if (idItemsInBasketList.includes(guitarElement.id)) {
                            return <li className="guitars__item">
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
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        
                                        }
                                    }
                                    >
                                        <PlusIcon />
                                    </button>
                                </div>
                                <div className="guitars__container">
                                    <p className="guitars__price">{guitarElement.price} ₽</p>
                                </div>
                            </li>
                        }
                        return ``
                    })}
                </ul>
            </div>
        </section>
     </main>
     <Footer />
    </>
}

const mapStateToProps = (state) => ({
    guitars: state.guitarList,
    idItemsInBasketList: state.idItemsInBasketList

});
export {Basket};
export default connect(mapStateToProps)(Basket);