import React, {useState} from 'react';
import PropTypes from "prop-types";
import {sortGuitarsByPriceFromLowestToHighest, sortGuitarsByReviewsFromLowestToHighest, sortGuitarsByPriceFromHighestToLowest, sortGuitarsByReviewsFromHighestToLowest} from '../utils/utils';
import {ReactComponent as UpIcon} from '../../img/icon-arrow-up.svg';
import {ReactComponent as DownIcon} from '../../img/icon-arrow-down.svg';

const CatalogSort = ({onSortTypeChange}) => {
  const [isPrice, setIsPrice] = useState(true);
  const handleSortByPriceFromLowestToHighest = () => {
    setIsPrice(true);
    onSortTypeChange(sortGuitarsByPriceFromLowestToHighest);
  };
  const handleSortByReviewsFromLowestToHighest = () => {
    setIsPrice(false);
    onSortTypeChange(sortGuitarsByReviewsFromLowestToHighest);
  };

  const handleSortByPriceFromHighestToLowest = () => {
    setIsPrice(true);
    onSortTypeChange(sortGuitarsByPriceFromHighestToLowest);
  };
  const handleSortByReviewsFromLowestToLowest = () => {
    setIsPrice(false);
    onSortTypeChange(sortGuitarsByReviewsFromHighestToLowest);
  };

  return <>
    <div className="catalog__sort sort">
      <h3 className="title sort__title">Сортировать:</h3>
      <div className="sort__container sort__container--text">
        <button className={`button sort__button ${isPrice ? `` : `sort__button--grey`} sort__button--price`} type="button" onClick={handleSortByPriceFromLowestToHighest}>по цене</button>
        <button className={`button sort__button ${isPrice ? `sort__button--grey` : ``} sort__button--reviews`} type="button" onClick={handleSortByReviewsFromLowestToHighest}>по популярности</button>
      </div>
      <div className="sort__container sort__container--pictures">
        <button
          className="button sort__button sort__button--up"
          aria-label="Сортироать от низкого к высокому показателю"
          type="button"
          onClick={isPrice ? handleSortByPriceFromLowestToHighest : handleSortByReviewsFromLowestToHighest}
        >
          <UpIcon />
        </button>
        <button
          className="button sort__button sort__button--down"
          aria-label="Сортироать от высокого к низкому показателю"
          type="button"
          onClick={isPrice ? handleSortByPriceFromHighestToLowest : handleSortByReviewsFromLowestToLowest}
        >
          <DownIcon />
        </button>
      </div>
    </div>


  </>;
};

CatalogSort.propTypes = {
  onSortTypeChange: PropTypes.func.isRequired,
};

export default CatalogSort;
