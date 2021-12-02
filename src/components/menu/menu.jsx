import React, {useState} from 'react';
import {allNavSiteLinks} from '../const/const';
import './menu.scss';

const Menu = () => {
  const defaultActiveLink = ``;
  const [activeLink, setActiveLink] = useState(defaultActiveLink);
  const handleActiveLink = (evt) => {
    setActiveLink(evt.target.dataset.link);
  };
  return (
    <nav className="header__nav  menu">
      <div className="menu__nav">
        <ul className="list menu__list">
          {allNavSiteLinks.map((siteLink) => {
            return <li key={siteLink.linkName} className="menu__item">
              <a href={`#${siteLink.href}`} onClick={(evt) => handleActiveLink(evt)} className={`link-site menu__link  ${siteLink.href === activeLink ? `menu__link--active` : ``}`} data-link={siteLink.href}>
                {siteLink.linkName}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
