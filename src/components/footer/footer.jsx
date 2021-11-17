import React from 'react';
import {footerInfoLinks} from '../const/const'
import Logo from '../logo/logo';
import FooterSocial from './footer-social';
import './footer.scss';
const Footer = () => {
    return (
        <footer className="footer" id="footer">
          <div className="footer__wrapper container-site">
              <div className="footer__section footer__section--first">
                <Logo isFooter={true}/>
                <FooterSocial />
              </div>
              <div className="footer__section footer__section--second">
                <h2 class="title">О нас</h2>
                <div className="footer__about about-footer">
                    <p className="about-footer__description">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
                    <p className="about-footer__description">Все инструменты проверены, отстроены и доведены до идеала! </p>
                </div>
              </div>
              <div className="footer__section footer__section--second">
                <h2 class="title">Информация</h2>
                <div className="footer__about about-footer">
                    <ul className="list social-footer__list">
                        {footerInfoLinks.map((footerInfo) => {
                            return <li key={footerInfo.name} className="social-footer__item">
                                <a href="!#" className="social-footer__link">
                                    {footerInfo.name}
                                </a>
                            </li>;
                    })}
                    </ul>
                </div>
              </div>
            {/* <div className="footer__left">
                <div className="footer__info information-footer">
                    <Logo isInternetBank={false}/>
                    <p className="information-footer__text information-footer__text--tablet-no">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
                </div>
                <div className="nav-footer">
                    <ul className="list footer__nav nav-footer__list">
                    {footerNavLinksList.map((siteLink) => {
                        return <li key={siteLink.linkName} className="nav-footer__item">
                        <a href={`#${siteLink.href}`} className="nav-footer__link">{siteLink.linkName}</a>
                        </li>;
                    })}
                    </ul>
                </div>
                <p className="information-footer__text information-footer__text--tablet-yes">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
            </div>    
            <div className="footer__right">
                {footerContactslInfo.map((contact) => {
                    return <div key={contact.name} className={`contacts-footer contacts-footer--${contact.name}`}>
                    <a href={`tel:${contact.tel.replace(/\s/g, ``)}`} className="contact__footer__link">{contact.tel}</a>
                    <p className="contact__footer__description">{contact.description}</p>
                    </div>;
                })}
                
            </div> */}
      </div>
        </footer>
    );
    }    

export default Footer;