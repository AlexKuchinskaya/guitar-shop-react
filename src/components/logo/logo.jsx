import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as LogoIcon } from '../../img/logo.svg';
import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
import './logo.scss';
import { Routes } from '../const/const';
import { IsMainPagePropType } from '../../types/types';

const Logo = ({isFooter, isMainPage}) => {
  return <>
    <Link className="header__logo logo" to={isMainPage ? `#0` : Routes.MAIN} aria-label="На главную">
        {isFooter ? <LogoIconFooter /> : <LogoIcon />}
    </Link>
  </>;
};

Logo.propTypes = {
  isFooter: PropTypes.bool.isRequired,
  isMainPage: IsMainPagePropType,
}

export default Logo;