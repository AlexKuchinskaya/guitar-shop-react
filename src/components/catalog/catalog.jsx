import React from 'react';
import { mocks } from '../mocks/mock';
import { formatPriceWithSpaces } from '../utils/utils';
import {GuitarTypes} from '../const/const';
// import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
import './catalog.scss';
import CatalogStarRating from './catalog-star-rating';

const Catalog = () => {

  const returnGuitarPicture = (guitarType) => {
    switch (guitarType) {
      case GuitarTypes.ACOUSTIC:
        return '../../img/acoustic-guitar-desktop.png';
      case GuitarTypes.ELECTRO:
        return  '../../img/electro-desktop.png';
      case GuitarTypes.UKULELE:
        return '../../img/ukulele-desktop.png';
      default:
        return ``;
    }
  }
  return (
    <section className="catalog">
            <h2 className="title catalog__title">Каталог гитар</h2>
            <div className="catalog__sort sort">
                <span>Сортировать:</span>
            </div>
            <div className="catalog__wrapper">
                <ul className="list catalog__list">
                    {mocks.map((mockGuitar) => {
                        return <article className="catalog__card" key={mockGuitar.item}>
                        <div className="catalog__image">
                            <img src={returnGuitarPicture(mockGuitar.type)} className="catalog__guitar-image" alt={mockGuitar.name} height="190" width="68" />
                        </div>
                        <div className="catalog__card-container catalog__card-container--rating">
                            <CatalogStarRating />
                            <span className="catalog__guitar-reviews">{mockGuitar.reviewNumber}</span>
                        </div>
                        <div className="catalog__card-container catalog__card-container--rating--info">
                            <span className="catalog__guitar-name">{mockGuitar.name}</span>
                            <span className="catalog__guitar-price">{formatPriceWithSpaces(mockGuitar.price)} ₽</span>
                        </div>
                        <div className="catalog__card-container catalog__card-container--rating--buttons">
                            <a href="!0" className="catalog__more-info">Подробнее</a>
                            <button type="button" className="button catalog__buy"> Купить</button>
                        </div>
                    </article>
                    })}
                </ul>
            </div>
        </section>
  )
};

export default Catalog;