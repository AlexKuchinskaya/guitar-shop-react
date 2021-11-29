// import './main.scss';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';

const Basket = (props) => {
    const {guitars, idItemsInBasketList} = props;
    return <>
     <Header />
     <main className="main">
        <h1 className="visually-hidden">Your Guitar Shop</h1>
        {/* <Catalog guitars={guitars}/> */}
        <section className="basket">
            <h2 className="title basket__title">Корзина</h2>
            <div className="guitars">
                <ul className="list guitars__list">

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