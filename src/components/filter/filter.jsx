import React, {useState} from 'react';
import { guitarTypesCheckbox, guitarNumberOfStrings } from '../const/const';
import './filter.scss';
// import { ReactComponent as LogoIcon } from '../../img/logo.svg';
// import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
// import './logo.scss';

const Filter = () => {
  const [priceFrom, setPriceFrom] = useState(1000);
  const [priceTo, setPriceTo] = useState(30000);
  const handlePriceInputFromChange = (evt) => {
    setPriceFrom(evt.target.value);
  }
  const handlePriceInputToChange = (evt) => {
    setPriceTo(evt.target.value);
  }
  const handlePriceInputFromBlur = () => {
      if (priceFrom < 0) {
          setPriceFrom(0);
      }
  }
  return (
      <div className="filter">
          <form className="filter__form">
            <h3 className="title filter__title">Фильтр</h3>
            <div className="filter__container">
                <div className="filter-wrapper filter-wrapper filter-wrapper--price">
                    <h4 className="title filter__subtitle">Цена, ₽</h4>
                    <div className="filter filter__price-container">
                        <div className="filter__input-container">
                            <label id="priceFrom" className="filter__label-price"></label>
                                <input 
                                    className="filter__price-input"
                                    htmlFor="priceFrom"
                                    type="number"
                                    placeholder="1 000"
                                    value={priceFrom}
                                    onChange={handlePriceInputFromChange}
                                    onBlur={handlePriceInputFromBlur}

                            />
                        </div>
                        <div className="filter__input-container">
                            <label id="priceTo" className="filter__label-price"></label>
                                <input 
                                    className="filter__price-input"
                                    htmlFor="priceTo"
                                    type="number"
                                    placeholder="30 000"
                                    value={priceTo}
                                    onChange={handlePriceInputToChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-wrapper filter-wrapper--guitar-types">
                    <h4 className="title filter__subtitle">Тип гитар</h4>
                    <ul className="list filter__list">
                        {guitarTypesCheckbox.map((guiarType) => {
                            return <li className="filter-item">
                                <label className="filter__label-checkbox">
                                    <input 
                                        className="filter__input filter__checkbox"
                                        type="checkbox"
                                    />
                                    <span className="filter__check-box"></span>
                                    {guiarType}
                                </label>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="filter-wrapper">
                    <h4 className="title filter__subtitle">Количество струн</h4>
                    <ul className="list filter__list">
                        {guitarNumberOfStrings.map((stringNumber) => {
                            return <li className="filter-item">
                                <label className="filter__label-checkbox">
                                    <input 
                                        className="filter__input filter__checkbox"
                                        type="checkbox"
                                    />
                                    <span className="filter__check-box"></span>
                                    {stringNumber}
                                </label>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
          </form>
          <button type="submit">показать</button>
      </div>
  )
};

export default Filter;