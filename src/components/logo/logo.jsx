import React from 'react';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';
import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
import './logo.scss';

const Logo = ({isFooter}) => {
  return <>
    <a className="header__logo logo" href="!#" aria-label="На главную">
        {isFooter ? <LogoIconFooter /> : <LogoIcon />}
    </a>
  </>;
};

export default Logo;