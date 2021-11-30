import React, {useState, useEffect} from 'react';
import { formatPriceWithSpaces } from '../utils/utils';
import {GuitarTypes} from '../const/const';
import {connect} from 'react-redux';
import './catalog.scss';
import './pagination.scss';
import CatalogStarRating from './catalog-star-rating';
import CatalogSort from './catalog-sort';
import Filter from '../filter/filter';
import ModalBasket from '../modals/modalBasket';
// import Pagination from '../pagination/pagination';
import ReactPaginate from 'react-paginate';
import { GuitarListPropType } from '../../types/types';


const Catalog = ({guitars}) => {
  // const bodyElement = document.querySelector(`.body-page`)
  // const [currentPage, setCurrentPage] = useState(1)
  const guitarPerPage = 9;
  // const lastGuitarIndex = currentPage * guitarPerPage;
  // const firstGuitarIndex = lastGuitarIndex - guitarPerPage;
  const [mocksData, setMocksData] = useState(guitars)
  console.log(`mocksData`, mocksData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(null)
  // const currentGuitarListPerPage = mocksData.slice(firstGuitarIndex, lastGuitarIndex)



  // React Paginate

  // const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const onFilterShowButtonClick = (onFilterShowButtonClickCallback) => {
    setMocksData(onFilterShowButtonClickCallback([...guitars]))
  }
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + guitarPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setMocksData(guitars.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(guitars.length / guitarPerPage));
  }, [itemOffset, guitarPerPage, guitars]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(`pageCount`, pageCount)

    const newOffset = (event.selected * guitarPerPage) % guitars.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const onIsModalOpenChange = (isModalOpenCallback) => {
    setIsModalOpen(isModalOpenCallback)
  }

  const onSortTypeChange = (sortCallback) => {
    if (mocksData !== guitars) {
      setMocksData([...guitars]);
    }
    setMocksData([...mocksData].sort(sortCallback));
  }

  // const onPageNumberClick = (pageNumber) => setCurrentPage(pageNumber);


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

  const handleButtonBuyOnClick = (index) => {
    setIsModalOpen(true);
    setModalIndex(index);
    // console.log(`bodyElement`, bodyElement)
    // bodyElement.classListAdd(`body-page--hidden`)
  }
  return (
    <section className="catalog">
            <h2 className="title catalog__title">Каталог гитар</h2>
            <Filter onFilterShowButtonClick={onFilterShowButtonClick}/>
            <CatalogSort onSortTypeChange={onSortTypeChange} />
            <div className="catalog__wrapper">
                <ul className="list catalog__list">
                    {mocksData && 
                      mocksData.map((mockGuitar, index) => {
                        return <article key={mockGuitar.id} className="catalog__card">
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
                              <button
                                type="button"
                                className="button catalog__buy"
                                onClick={() => handleButtonBuyOnClick(index)}
                              > Купить</button>
                          </div>
                        </article>
                    })}
                </ul>
                {isModalOpen && modalIndex !== null ? <ModalBasket guitarCard={mocksData[modalIndex]} onIsModalOpenChange={onIsModalOpenChange}/> : ``}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Далее"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="Назад"
                    renderOnZeroPageCount={null}
                    containerClassName={"list pagination__list"}
                    pageClassName={"pagination__item"}
                    pageLinkClassName={"pagination__link"}
                    activeLinkClassName={"pagination__link pagination__link--active"}
                    breakClassName={"pagination__item pagination__item--break"}
                    breakLinkClassName={"pagination__link--break"}
                    previousClassName={`pagination__item pagination__item--back ${itemOffset === 0 ? `pagination__item--none` : ``}`}
                    nextClassName={"pagination__item pagination__item--next"}
                    previousLinkClassName={"pagination__link pagination__link--back"}
                    nextLinkClassName={"pagination__link pagination__link--next"}
                />
                {/* <Pagination guitarPerPage={guitarPerPage} totalGuitars={mocksData.length} onPageNumberClick={onPageNumberClick}/> */}
            </div>
        </section>
  )
};
const mapStateToProps = (state) => ({
  guitars: state.guitarList,
});

Catalog.propTypes = {
  guitars: GuitarListPropType,
}

export {Catalog};
export default connect(mapStateToProps)(Catalog);