import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import './pagination-navigation.scss';
import {pageNavigationLinks} from '../const/const';

const PageNavigation = ({isBasket}) => {
  const checkedArrayWithBasketOrNot = isBasket ? pageNavigationLinks : pageNavigationLinks.filter((element) => element.id !== 3);
  return (
    <div className={`${isBasket ? `basket__navigation` : `catalog__navigation`} navigation-site`}>
      <ul className="list navigation-site__list">
        {checkedArrayWithBasketOrNot.map((navLink) => {
          return <li key={navLink.linkName} className="navigation-site__item">
            <Link className={`navigation-site__link navigation-site__link--${navLink.class}`} to={navLink.route}>{navLink.linkName}</Link>
          </li>;
        }) }
      </ul>
    </div>
  );
};

PageNavigation.propTypes = {
  isBasket: PropTypes.bool.isRequired,
};

export default PageNavigation;
