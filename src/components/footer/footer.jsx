import React from 'react';
import {footerCatalogLinks, footerInfoLinks} from '../const/const'
import Logo from '../logo/logo';
import FooterSocial from './footer-social';
import './footer.scss';
const Footer = () => {
    return (
        <footer className="footer" id="footer">
          <div className="footer__wrapper container-site">
              <div className="footer__section footer__section--social">
                <Logo isFooter={true}/>
                <FooterSocial />
              </div>
              <div className="footer__container">
                  <div className="footer__section-container">
                    <div className="footer__section footer__section--about">
                        <h2 className="title footer__title">О нас</h2>
                        <div className="footer__about about-footer">
                            <p className="about-footer__description">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
                            <p className="about-footer__description">Все инструменты проверены, отстроены и доведены до идеала! </p>
                        </div>
                    </div>
                    <div className="footer__section footer__section--catalog">
                        <h2 className="title footer__title">Каталог</h2>
                        <div className="footer__about catalog-footer">
                            <ul className="list catalog-footer__list">
                                {footerCatalogLinks.map((footerCatalog) => {
                                    return <li key={footerCatalog.name} className="catalog-footer__item">
                                        <a href="!#" className="catalog-footer__link">
                                            {footerCatalog.name}
                                        </a>
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__section footer__section--info">
                        <h2 className="title footer__title">Информация</h2>
                        <div className="footer__about info-footer">
                            <ul className="list info-footer__list">
                                {footerInfoLinks.map((footerInfo) => {
                                    return <li key={footerInfo.name} className="info-footer__item">
                                        <a href="!#" className="info-footer__link">
                                            {footerInfo.name}
                                        </a>
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                  </div>
                <div className="footer__section footer__section--contacts">
                    <h2 className="title footer__title">Контакты</h2>
                    <div className="footer__about contacts-footer">
                        <div className="contacts-footer__wrapper">
                            <h3 className="title visually-hidden contacts-footer__title">Адрес</h3>
                            <p className="contacts-footer__adress">г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6. </p>
                            <a href="tel:88125005050" className="contacts-footer__link">8-812-500-50-50</a>
                        </div>
                        <div className="contacts-footer__wrapper">
                            <h3 className="contacts-footer__title">Режим работы:</h3>
                            <p className="contacts-footer__time">с 11:00 до 20:00, без выходных.</p>
                        </div>
                    </div>
                </div>
              </div>
      </div>
        </footer>
    );
    }    

export default Footer;