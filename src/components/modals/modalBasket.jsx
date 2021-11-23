import React, {useState} from 'react';
import AddToBasket from "./add-to-basket";
import AddedToBasket from "./added-to-basket";

const ModalBasket = ({guitarCard}) => {
  const [isAddToBasket, setIsAddToBasket] = useState(true)
  const onAddToBasketClick = (addToBasketCallback) => {
    const newIsAddToBasket = addToBasketCallback()
    setIsAddToBasket(newIsAddToBasket);
  }
    return (
      <div className="modal modal--show">
        <div className="modal__main">
          <h3 className="title modal__title">{isAddToBasket? `Добавить товар в корзину` : `Товар успешно добавлен в корзину`}</h3>
          <div className="modal__wrapper">
              {isAddToBasket ?
                <AddToBasket guitarCard={guitarCard} onAddToBasketClick={onAddToBasketClick}/>
                :
                <AddedToBasket />
            
            }
          </div>
        </div>
      </div>
    )
};
  
export default ModalBasket;