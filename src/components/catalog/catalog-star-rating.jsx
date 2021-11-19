import React from 'react';
// import PropTypes from "prop-types";
import {STARS_RATING} from '../const/const';
import { ReactComponent as StarRating } from '../../img/icon-star.svg';

const CatalogStarRating = () => {
  return (
    <div className="catalog__rating">
      {STARS_RATING.map((star) => {
        return (
          <div key={star} className="catalog__star">
              <StarRating />
          </div>
        );
      })}
    </div>
  );
};

// ReviewRating.propTypes = {
//   reviewRating: PropTypes.number.isRequired
// };

export default CatalogStarRating;