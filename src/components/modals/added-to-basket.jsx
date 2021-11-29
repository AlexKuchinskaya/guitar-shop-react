import {Link} from "react-router-dom";
import { Routes } from '../const/const';
const AddedToBasket = () => {
     return <>
        <Link to={Routes.MY_BASKET} className="button modal__button">Перейти в корзину</Link>
        <a href="!0" className="button modal__button modal__button--basket">Продолжить покупки</a>
    </>
};
   
export default AddedToBasket;