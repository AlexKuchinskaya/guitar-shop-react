import React from 'react';
import { sortGuitarsByPrice, sortGuitarsByReviews } from '../utils/utils';
// import { ReactComponent as LogoIcon } from '../../img/logo.svg';
// import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
// s

const CatalogSort = ({onPriceChange}) => {
    const handleSortByPrice = () => {
        console.log(`button clicked`)
        onPriceChange(sortGuitarsByPrice)
    }
    const handleSortByReviews = () => {
        onPriceChange(sortGuitarsByReviews)
    }
  return <>
    <form className="catalog__sort form-sort" action="#" method="get">
        <div className="form-sort__container">
            <button className="button button__sort" type="button" onClick={handleSortByPrice}>By price</button>
            <button className="button button__sort" type="button" onClick={handleSortByReviews}>By reviews</button>
            {/* <input 
                id="sort-price" 
                className="form-sort__input visually-hidden" 
                type="radio" 
                name="trip-sort" 
                value="sort-price" 
                onChange={handleSortByPrice}
                checked
            />
            <label class="form-sort__label" htmlFor="sort-price">по цене</label> */}
        </div>

        <div className="form-sort__container">
            <input 
                id="sort-reviews"
                className="form-sort__input visually-hidden"
                type="radio" 
                name="sort-reviews" 
                value="sort-offer"/>
            <label className="form-sort__label" htmlFor="sort-reviews">по популярности</label>
        </div>
    </form>
  </>
};

export default CatalogSort;