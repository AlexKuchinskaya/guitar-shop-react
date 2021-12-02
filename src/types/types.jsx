import PropTypes from 'prop-types';

export const itemsInBasketPropType = PropTypes.number.isRequired;

export const isMainPagePropType = PropTypes.bool.isRequired;

export const guitarPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reviewNumber: PropTypes.number.isRequired,
  stringNumber: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
});

export const guitarListPropType = PropTypes.arrayOf(guitarPropType).isRequired;
