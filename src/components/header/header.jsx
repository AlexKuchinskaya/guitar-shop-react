import React from 'react';
import {ReactComponent as MapIcon} from '../../img/icon-map.svg';
import {ReactComponent as SearchIcon} from '../../img/icon-search.svg';
import {ReactComponent as BasketIcon} from '../../img/icon-basket.svg';
import {extraLinks, ExtraLinks, Routes} from '../const/const';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
import {connect} from 'react-redux';
import './header.scss';
import {IsMainPagePropType, ItemsInBasketPropType} from '../../types/types';
import {Link} from 'react-router-dom';

const Header = ({basketItems, isMainPage}) => {
    const returnSvg = (link) => {
        switch (link) {
          case ExtraLinks.MAP:
            return <MapIcon /> ;
          case ExtraLinks.SEARCH:
            return  <SearchIcon />;
          case ExtraLinks.BASKET:
            return <BasketIcon />;
          default:
            return ``;
        }
    }
    return <>
        <header className="header">
            <div className="container-site header__container">
                <Logo isFooter={false} isMainPage={isMainPage}/>
                <Menu />
                <div className="header__extra-links">
                    <ul className="list header__extra-list">
                        {extraLinks.map((siteLink) => {
                        return <li key={siteLink.id} className="header__extra-item">
                            <Link to={siteLink.id === 3 ? Routes.MY_BASKET : `#0`} className={`header__extra-link header__extra-link--${siteLink.linkName}`} aria-label={siteLink.linkName}>
                            {returnSvg(siteLink.id)}
                            {siteLink.id === 3 ? <span className="header__extra-count">
                                <sup>{basketItems > 0 ? basketItems : null}</sup>
                            </span> : ``}
                            </Link>
                        </li>;
                        })}
                    </ul>
                </div>
            </div>
        </header>
    </ >;
};
const mapStateToProps = (state) => ({
    basketItems: state.itemsInBasket,
});

Header.propTypes = {
    basketItems: ItemsInBasketPropType,
    isMainPage: IsMainPagePropType,
}

export {Header};
export default connect(mapStateToProps)(Header);
