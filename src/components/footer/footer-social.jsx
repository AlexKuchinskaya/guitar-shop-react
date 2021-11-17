import React from 'react';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as Twitter } from '../../img/twitter.svg';
import {footerSocialInfo, SocialLinks} from '../const/const';


const FooterSocial = () => {
    const returnSvgSocial = (link) => {
        switch (link) {
          case SocialLinks.FACEBOOK:
            return <Facebook /> ;
          case SocialLinks.INSTAGRAM:
            return  <Instagram />;
          case SocialLinks.TWITTER:
            return <Twitter />;
          default:
            return ``;
        }
    }
  return <div className="footer__social social-footer">
    <ul className="list social-footer__list">
        {footerSocialInfo.map((social) => {
            return <li key={social.name} className="social-footer__item">
            <a href="!#" className="social-footer__link">
            {returnSvgSocial(social.id)}
            </a>
            </li>;
        })}
    </ul>
</div>
};

export default FooterSocial;