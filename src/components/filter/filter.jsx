import React, {useState, useEffect} from 'react';
import { guitarTypesCheckbox, guitarNumberOfStrings } from '../const/const';
import './filter.scss';
// import './logo.scss';

const Filter = () => {
const [stateStringsArrayFilter, setStateStringsArrayFilter] = useState([
    true, true, true, true
])

const addAcousticFilterToState = (filters) => {
    console.log("ACUSTIC FILTER")
    const acousticFilter = [true, false,false,false];
    const returnFilter = acousticFilter.map((value,index)=>{
        return value && filters[index];
    })
    return returnFilter;
}

const addElectricFilterToState= (filters) => {
    const electricFilter = [false, false,false,true];
    const returnFilter = electricFilter.map((value,index)=>{
        return value && filters[index];
    })
    return returnFilter;
}

const addUkuleleFilterToState = (filters) => {
    const ukeleleFilter = [false, true,true,true];
    const returnFilter = ukeleleFilter.map((value,index)=>{
        return value && filters[index];
    })
    return (returnFilter);
}

const checkStringCheckboxDisabled = (iii, strings) => {
    const r = guitarTypesCheckbox.map((gug => {    
        const oqe = strings === 4 || strings === 7 || strings === 12
        const electroor = strings === 4 || strings === 7 || strings === 6
        if (gug === iii && oqe) {
            return false
        } 
        else if (gug === iii && electroor) {
            return false
        } 
        else if (gug === iii && strings === 4) {
            return false
        }
        else {
            return true
        }
       
    }))
    return r;
}
function isBiggerThan10(element, iii, strings, index, array) {
    if (element === iii & strings === 4) {
        return element === iii & strings === 4
    }
  }
    const [checkedTypeGuitarState, setCheckedTypeGuitarState] = useState(
        new Array(guitarTypesCheckbox.length).fill(false)
    );
    const [disabledTypeGuitarState, setDisabledTypeGuitarState] = useState(
        new Array(guitarNumberOfStrings.length).fill(true)
    );
    const handleGuitarTypeOnChange = (position) => {

        //console.log("position: ", position)
        const updatedCheckedState = checkedTypeGuitarState.map((itemState, index) =>
        index === position ? !itemState : itemState
        );

        setCheckedTypeGuitarState(updatedCheckedState);
        //console.log(`updatedCheckedState`, updatedCheckedState);
        //console.log(`stateStringsArrayFilter`, stateStringsArrayFilter);
        // for (let position = 0; position < updatedCheckedState.length; position++)  { 
        //     if(position === 0 ){
        //         if(updatedCheckedState[position]){
        //             console.log(`checkedTypeGuitarState[position]`, checkedTypeGuitarState[position])
        //             addAcousticFilterToState();
        //             console.log(`stateStringsArrayFilter`, stateStringsArrayFilter);
        //         }
        //     }
        //     if(position === 1 ){
        //         if(updatedCheckedState[position]){
        //             addElectricFilterToState();
        //         }
        //     }
        //     if(position === 2 ){
        //         if(updatedCheckedState[position]){
        //             addUkuleleFilterToState();
        //         }
        //     }
            
        // }
       // console.log(`stateStringsArrayFilterAfter`, stateStringsArrayFilter);
        // if(position === 0 ){
        //     if(updatedCheckedState[position]){
        //         console.log(`checkedTypeGuitarState[position]`, checkedTypeGuitarState[position])
        //         addAcousticFilterToState();
        //     }
        // }
        // if(position === 1 ){
        //     if(updatedCheckedState[position]){
        //         addElectricFilterToState();
        //     }
        // }
        // if(position === 2 ){
        //     if(updatedCheckedState[position]){
        //         addUkuleleFilterToState();
        //     }
        // }
        // const updatedDisabledState = updatedCheckedState.map((itemState, index) => {
        //     let arra 
        //     if (itemState && index === 0) {
        //         arra = [true, false, false, false]
        //         return [true, false, false, false]
        //     }
        //     else if (itemState && index === 1) {
        //         arra = [false, false, false, true]
        //         return [false, false, false, true]
                
        //     } else if ((itemState && index === 2)) {
        //         arra = [true, true, true, false]
        //         return [true, true, true, false]
        //     }
            
        // })
        // const eliminatedUndefined = updatedDisabledState.find((itemSisable, index) => {
        //     return itemSisable !== undefined
        // })
        // setDisabledTypeGuitarState(eliminatedUndefined)
        // console.log(`updatedDisabledState`, disabledTypeGuitarState)
    }
    const handleCheckDisabiltyGuitarStrings = () => {
        console.log(`Filters`, stateStringsArrayFilter);
        let stringsArrayFilter = [true,true,true,true];
        for (let position = 0; position < checkedTypeGuitarState.length; position++)  { 
            if(position === 0 ){
                if(checkedTypeGuitarState[position]){
                    stringsArrayFilter = addAcousticFilterToState(stringsArrayFilter);
                    console.log(`stateStringsArrayFilter`, stateStringsArrayFilter);
                }
            }
            if(position === 1 ){
                if(checkedTypeGuitarState[position]){
                    stringsArrayFilter = addElectricFilterToState(stringsArrayFilter);
                }
            }
            if(position === 2 ){
                if(checkedTypeGuitarState[position]){
                    stringsArrayFilter = addUkuleleFilterToState(stringsArrayFilter);
                }
            }
            
        }
        setStateStringsArrayFilter(stringsArrayFilter);
    }

    useEffect(() => {
        handleCheckDisabiltyGuitarStrings();
    }, [checkedTypeGuitarState]);

    const handleGuitarDisabledStutsOnChange = () => {
        const updatedCheckedState = checkedTypeGuitarState.map((itemState, index) => {
            if (itemState && index === 0) {
                setDisabledTypeGuitarState([
                    true, false, false, false
                ])
            }
            // else if (itemState && index === 1) {
            //     setDisabledTypeGuitarState([
            //         false, false, false, true
            //     ])
            // } 
            else {
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
                                        disabled={stateStringsArrayFilter[index]}
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