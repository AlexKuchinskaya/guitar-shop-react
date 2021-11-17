import React from 'react';
import { mocks } from '../mocks/mock';
import { formatPriceWithSpaces } from '../utils/utils';
// import { ReactComponent as LogoIcon } from '../../img/logo.svg';
// import { ReactComponent as LogoIconFooter } from '../../img/logo-footer.svg';
import './catalog.scss';

const Catalog = () => {
  return (
    <section className="catalog">
            <h2 className="title catalog__title">Каталог гитар</h2>
            <div className="catalog__sort sort">
                <span>Сортировать:</span>
            </div>
            <div className="catalog__wrapper">
                <ul className="catalog__list">
                    {mocks.map((mockGuitar) => {
                        return <article className="catalog__card" key={mockGuitar.item}>
                        {/* <div className="projects__image">
                            <img src={project.cardPicture} alt={project.name} width="280" height="175" />
                        </div> */}
                        <div className="catalog__card-container">
                            
                            <span className="catalog__guitar-reviews">{mockGuitar.reviewNumber}</span>
                        </div>
                        <div className="catalog__card-container">
                            <span className="catalog__guitar-name">{mockGuitar.name}</span>
                            <span className="catalog__guitar-price">{formatPriceWithSpaces(mockGuitar.price)} ₽</span>
                        </div>
                        <div className="catalog__card-container">
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