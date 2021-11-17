import React from 'react';
import { ReactComponent as MapIcon } from '../../img/icon-map.svg';
import { ReactComponent as SearchIcon } from '../../img/icon-search.svg';
import { ReactComponent as BasketIcon } from '../../img/icon-basket.svg';
import {extraLinks, ExtraLinks} from '../const/const';
import Logo from '../logo/logo';
import Menu from '../menu/menu';
// import Login from '../login/login';
// import ModalLogin from '../modal-login/modal-login';
import './header.scss';

const Header = ({isMenuOpened = true}) => {
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
        <header className={`header ${isMenuOpened ? `header--opened` : `header--closed`}`}>
            <div className="container-site header__container">
                <Logo isFooter={false}/>
                <Menu />
                <div className="header__extra-links">
                    <ul className="list header__extra-list">
                        {extraLinks.map((siteLink) => {
                        return <li key={siteLink.id} className="header__extra-item">
                            <a href="!#" className={`header__extra-link header__extra-link--${siteLink.linkName}`} aria-label={siteLink.linkName}>
                            {returnSvg(siteLink.id)}
                            {siteLink.id === 3 ? <span className="header__extra-count"><sup>2</sup></span> : ``}
                            </a>
                        </li>;
                        })}
                    </ul>
                </div>
            </div>
        </header>
    </ >;
  };
  
export default Header;