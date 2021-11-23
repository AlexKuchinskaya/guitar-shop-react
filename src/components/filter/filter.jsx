import React, {useState} from 'react';
import { guitarTypesCheckbox, guitarNumberOfStrings } from '../const/const';
import './filter.scss';
// import './logo.scss';

const Filter = () => {
const arrGuit = [
    {
        acoustic: {

        }
    }
]
const checkStringCheckboxDisabled = (iii, strings) => {
    const r = guitarTypesCheckbox.map((gug => {
        console.log(gug)
        console.log(strings)
        const oqe = strings === 4 || strings === 7 || strings === 12
        const electroor = strings === 4 || strings === 7 || strings === 6
        if (gug === iii && oqe) {
            console.log(`gug === iii && oqe`, gug === iii && oqe)
            return false
        } 
        else if (gug === iii && electroor) {
            console.log(`gug === iii && electroor`, gug === iii && electroor)
            return false
        } 
        else if (gug === iii && strings === 4) {
            console.log(`gug === iii && strings === 4`, gug === iii && strings === 4)
            return false
        }
        else {
            return true
        }
       
    }))
    console.log(`r`, r)
    return r;
}
function isBiggerThan10(element, iii, strings, index, array) {
    if (element === iii & strings === 4) {
        return element === iii & strings === 4
    }
  }
  const bla =[2, 5, 8, 1, 4].some(isBiggerThan10);
    const [checkedTypeGuitarState, setCheckedTypeGuitarState] = useState(
        new Array(guitarTypesCheckbox.length).fill(false)
    );
    const [disabledTypeGuitarState, setDisabledTypeGuitarState] = useState(
        new Array(guitarNumberOfStrings.length).fill(true)
    );
    const handleGuitarTypeOnChange = (position) => {
        const updatedCheckedState = checkedTypeGuitarState.map((itemState, index) =>
            index === position ? !itemState : itemState
        );

        setCheckedTypeGuitarState(updatedCheckedState);
        console.log(`updatedCheckedState`, updatedCheckedState)
        const updatedDisabledState = updatedCheckedState.map((itemState, index) => {
            let arra 
            console.log(`itemState`,itemState)
            console.log(`index`,index)
            if (itemState && index === 0) {
                arra = [true, false, false, false]
                console.log(`arra`, arra)
                return [true, false, false, false]
            }
            else if (itemState && index === 1) {
                arra = [false, false, false, true]
                return [false, false, false, true]
                
            } else if ((itemState && index === 2)) {
                arra = [true, true, true, false]
                return [true, true, true, false]
            }
            
        })
        const eliminatedUndefined = updatedDisabledState.find((itemSisable, index) => {
            return itemSisable !== undefined
        })
        setDisabledTypeGuitarState(eliminatedUndefined)
        console.log(`updatedDisabledState`, disabledTypeGuitarState)
    }
    const handleGuitarDisabledStutsOnChange = () => {
        const updatedCheckedState = checkedTypeGuitarState.map((itemState, index) => {
            if (itemState && index === 0) {
                setDisabledTypeGuitarState([
                    true, false, false, false
                ])
            }
            else if (itemState && index === 1) {
                setDisabledTypeGuitarState([
                    false, false, false, true
                ])
            } else {
                setDisabledTypeGuitarState([
                    true, true, true, false
                ])
            }
    
        })
        return updatedCheckedState

    }
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
      } else if (priceFrom > priceTo) {
        setPriceFrom(priceTo)
      }
      return null
  }
  const handlePriceInputFromTo = () => {
    if (priceTo < 0) {
        setPriceTo(0);
    } else if (priceFrom > priceTo) {
        setPriceTo(priceFrom)
    }
    return null
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
                                    onBlur={handlePriceInputFromTo}
                            />
                        </div>
                    </div>
                </div>
                <div className="filter-wrapper filter-wrapper--guitar-types">
                    <h4 className="title filter__subtitle">Тип гитар</h4>
                    <ul className="list filter__list">
                        {guitarTypesCheckbox.map((guitarType, index) => {
                            return <li className="filter-item">
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
                            return <li className="filter-item">
                                <label className="filter__label-checkbox">
                                    <input 
                                        className="filter__input filter__checkbox"
                                        type="checkbox"
                                        disabled={disabledTypeGuitarState[index]}
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