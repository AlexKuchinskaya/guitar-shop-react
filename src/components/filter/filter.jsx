import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {GuitarTypes, guitarTypesCheckbox, guitarNumberOfStrings, DEFAULT_1000, DEFAULT_3000} from '../const/const';
import './filter.scss';

const Filter = ({onFilterShowButtonClick}) => {
  const [priceFrom, setPriceFrom] = useState(undefined);
  const [priceTo, setPriceTo] = useState(undefined);
  const [checkedTypeGuitarState, setCheckedTypeGuitarState] = useState(
      new Array(guitarTypesCheckbox.length).fill(false)
  );
  const [stateStringsArrayFilter, setStateStringsArrayFilter] = useState([
    true, true, true, true
  ]);

  const [checkedStringGuitarState, setCheckedStringGuitarState] = useState(
      new Array(guitarNumberOfStrings.length).fill(false)
  );

  const addAcousticFilterToState = (filters) => {
    const acousticFilter = [true, false, false, false];
    const returnFilter = acousticFilter.map((value, index)=>{
      return value && filters[index];
    });
    return returnFilter;
  };

  const addElectricFilterToState = (filters) => {
    const electricFilter = [false, false, false, true];
    const returnFilter = electricFilter.map((value, index)=>{
      return value && filters[index];
    });
    return returnFilter;
  };

  const addUkuleleFilterToState = (filters) => {
    const ukeleleFilter = [false, true, true, true];
    const returnFilter = ukeleleFilter.map((value, index)=>{
      return value && filters[index];
    });
    return (returnFilter);
  };


  const handleGuitarTypeOnChange = (position) => {
    let updatedCheckedState = [...checkedTypeGuitarState];
    updatedCheckedState[position] = !updatedCheckedState[position];
    setCheckedTypeGuitarState(updatedCheckedState);
  };

  const handleGuitarStringOnChange = (position) => {
    let updatedCheckedStringState = [...checkedStringGuitarState];
    updatedCheckedStringState[position] = !updatedCheckedStringState[position];
    setCheckedStringGuitarState(updatedCheckedStringState);
  };


  const handleCheckDisabiltyGuitarStrings = () => {
    let stringsArrayFilter = [true, true, true, true];
    for (let position = 0; position < checkedTypeGuitarState.length; position++) {
      if (position === 0) {
        if (checkedTypeGuitarState[position]) {
          stringsArrayFilter = addAcousticFilterToState(stringsArrayFilter);
        }
      }
      if (position === 1) {
        if (checkedTypeGuitarState[position]) {
          stringsArrayFilter = addElectricFilterToState(stringsArrayFilter);
        }
      }
      if (position === 2) {
        if (checkedTypeGuitarState[position]) {
          stringsArrayFilter = addUkuleleFilterToState(stringsArrayFilter);
        }
      }

    }

    setStateStringsArrayFilter(stringsArrayFilter);
    let updatedCheckedStringGuitarState = [...checkedStringGuitarState];
    for (let i = 0; i < stringsArrayFilter.length; i++) {
      if (stringsArrayFilter[i] === true) {
        updatedCheckedStringGuitarState[i] = false;
      }
    }
    setCheckedStringGuitarState(updatedCheckedStringGuitarState);

  };

  const handlePriceInputFromChange = (evt) => {
    setPriceFrom(evt.target.value);
  };

  const handlePriceInputToChange = (evt) => {
    setPriceTo(evt.target.value);
  };

  const handlePriceInputFromBlur = () => {
    if (priceFrom < 0) {
      setPriceFrom(0);
    } else if (priceFrom > priceTo) {
      setPriceFrom(priceTo);
    }
  };

  const handlePriceInputFromTo = () => {
    if (priceTo < 0) {
      setPriceTo(0);
    } else if (priceFrom > priceTo) {
      setPriceTo(priceFrom);
    }
  };
  const filterByPrice = (dataToFilter, startingPrice, limitPrice) => {
    if (startingPrice === undefined && limitPrice === undefined) {
      return dataToFilter;
    } else if (startingPrice === undefined) {
      return dataToFilter.filter((elementToFilter) => elementToFilter.price <= limitPrice);
    } else if (limitPrice === undefined) {
      return dataToFilter.filter((elementToFilter) => elementToFilter.price >= startingPrice);
    } else {
      return dataToFilter.filter((elementToFilter) => elementToFilter.price >= startingPrice && elementToFilter.price <= limitPrice);
    }
  };
  const getCheckedGuitarsType = (guitarStates) => {
    let guitarsTypes = [];
    guitarStates.forEach((guitarStateElement, index) => {
      if (guitarStateElement === false) {
        return;
      }
      if (index === 0) {
        guitarsTypes.push(GuitarTypes.ACOUSTIC);
      } else if (index === 1) {
        guitarsTypes.push(GuitarTypes.ELECTRO);
      } else if (index === 2) {
        guitarsTypes.push(GuitarTypes.UKULELE);
      }

    });

    return guitarsTypes;
  };

  const filterGuitarsByType = (dataGuitars) => {
    const checkedGuitarsType = getCheckedGuitarsType(checkedTypeGuitarState);
    if (checkedGuitarsType.length > 0) {
      const guitarTypesFiltered = dataGuitars.filter((guitarElement) =>
        checkedGuitarsType.includes(guitarElement.type)
      );

      return guitarTypesFiltered;
    }
    return dataGuitars;
  };

  const filterDataByPrice = (dataGuitars) => {
    return filterByPrice(dataGuitars, priceFrom, priceTo);
  };

  const getCheckedGuitarsStrings = (guitarStringStates) => {
    let guitarsStrings = [];
    guitarStringStates.forEach((guitarStringStateElement, index) => {
      if (guitarStringStateElement === false) {
        return;
      }
      if (index === 0) {
        guitarsStrings.push(4);
      } else if (index === 1) {
        guitarsStrings.push(6);
      } else if (index === 2) {
        guitarsStrings.push(7);
      } else if (index === 3) {
        guitarsStrings.push(12);
      }

    });

    return guitarsStrings;
  };
  const filterGuitarsByStrings = (dataGuitars) => {
    const checkedGuitarsString = getCheckedGuitarsStrings(checkedStringGuitarState);
    if (checkedGuitarsString.length > 0) {
      const guitarStringFiltered = dataGuitars.filter((guitarElement) =>
        checkedGuitarsString.includes(guitarElement.stringNumber)
      );
      return guitarStringFiltered;
    }
    return dataGuitars;

  };
  const activateAllFilterFunctions = (dataGuitars) => {
    return filterDataByPrice(filterGuitarsByType(filterGuitarsByStrings(dataGuitars)));
  };
  const handleOnSubmitForm = (evt) => {
    evt.preventDefault();
    onFilterShowButtonClick(activateAllFilterFunctions);

  };

  useEffect(() => {
    handleCheckDisabiltyGuitarStrings();
  }, /* eslint-disable */[checkedTypeGuitarState]); /* eslint-disable */

    return (
      <div className="filter">
          <form className="filter__form">
            <h3 className="title filter__title">Фильтр</h3>
            <div className="filter__container">
                <div className="filter-wrapper filter-wrapper filter-wrapper--price">
                    <h4 className="title filter__subtitle">Цена,
                        <span className="filter__title-currency">₽</span>
                    </h4>
                    <div className="filter filter__price-container">
                        <div className="filter__input-container">
                            <label id="priceFrom" className="filter__label-price"></label>
                                <input 
                                    className="filter__price-input"
                                    htmlFor="priceFrom"
                                    type="number"
                                    placeholder={DEFAULT_1000}
                                    value={priceFrom}
                                    onChange={handlePriceInputFromChange}
                                    onBlur={handlePriceInputFromBlur}
                                    placeholder={DEFAULT_1000}

                            />
                        </div>
                        <div className="filter__input-container">
                            <label id="priceTo" className="filter__label-price"></label>
                                <input 
                                    className="filter__price-input"
                                    htmlFor="priceTo"
                                    type="number"
                                    placeholder={DEFAULT_3000}
                                    value={priceTo}
                                    onChange={handlePriceInputToChange}
                                    onBlur={handlePriceInputFromTo}
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-wrapper filter-wrapper--guitar-types">
                    <h4 className="title filter__subtitle">Тип гитар</h4>
                    <ul className="list filter__list">
                        {guitarTypesCheckbox.map((guitarType, index) => {
                            return <li className="filter-item" key={guitarType}>
                                <label className="filter__label-checkbox">
                                    <input 
                                        className="filter__input filter__checkbox"
                                        type="checkbox"
                                        checked={checkedTypeGuitarState[index]}
                                        onChange={() => handleGuitarTypeOnChange(index)}
                                    />
                                    <span className="filter__check-box"></span>
                                    {guitarType}
                                </label>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="filter-wrapper">
                    <h4 className="title filter__subtitle">Количество струн</h4>
                    <ul className="list filter__list">
                        {guitarNumberOfStrings.map((stringNumber, index) => {
                            return <li className="filter-item" key={stringNumber}>
                                <label className="filter__label-checkbox">
                                    <input 
                                        className="filter__input filter__checkbox"
                                        type="checkbox"
                                        disabled={stateStringsArrayFilter[index]}
                                        checked={checkedStringGuitarState[index]}
                                        onChange={() => handleGuitarStringOnChange(index)}
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
          <button 
            type="submit"
            className="button button--grey filter__button-show"
            onClick={handleOnSubmitForm}
        >показать</button>
      </div>
  )
};

Filter.propTypes = {
    onFilterShowButtonClick: PropTypes.func.isRequired,
}

export default Filter;