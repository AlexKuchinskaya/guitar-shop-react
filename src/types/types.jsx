import PropTypes from 'prop-types';

export const ItemsInBasketPropType = PropTypes.number.isRequired;

export const IsMainPagePropType = PropTypes.bool.isRequired;

export const GuitarPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reviewNumber: PropTypes.number.isRequired,
    stringNumber: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
});
  
export const GuitarListPropType = PropTypes.arrayOf(GuitarPropType).isRequired;