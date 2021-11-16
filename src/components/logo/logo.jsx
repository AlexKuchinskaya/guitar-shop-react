import React from 'react';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';

const Logo = () => {
  return <>
    <a className="header__logo logo" href="!#" aria-label="На главную">
        <LogoIcon />
    </a>
  </>;
};

export default Logo;