import React, { useState} from 'react';
// import { ReactComponent as Logo7 } from '../../img/close-icon.svg';
// import { ReactComponent as OpenIcon } from '../../img/burger.svg';
import { allNavSiteLinks } from '../const/const';
import Logo from '../logo/logo';
// import Login from '../login/login';
// import ModalLogin from '../modal-login/modal-login';
const Header = ({isMenuOpened = true}) => {
    const defaultActiveLink = ``;
    const [activeLink, setActiveLink] = useState(defaultActiveLink);
    const handleActiveLink = (evt) => {
        setActiveLink(evt.target.dataset.link);
    };
    return <>
        <header className={`header ${isMenuOpened ? `header--opened` : `header--closed`}`}>
            <div className="container-site header__container">
                <Logo/>
                <nav className="header__nav  menu">
                    <div className="menu__nav">
                        <ul className="list menu__list">
                            {allNavSiteLinks.map((siteLink) => {
                            return <li key={siteLink.linkName} className="menu__item">
                                <a href={`#${siteLink.href}`} onClick={(evt) => handleActiveLink(evt)} className={`menu__link  ${siteLink.href === activeLink ? `menu__link--active` : ``}`} data-link={siteLink.href}>
                                    {siteLink.linkName}
                                </a>
                            </li>;
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </ >;
  };
  
export default Header;