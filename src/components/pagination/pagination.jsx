import React from 'react'
import './pagination.scss';

const Pagination = ({guitarPerPage, totalGuitars, onPageNumberClick}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGuitars / guitarPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePageNumberOnClick = (pageNumber) => {
        onPageNumberClick(pageNumber)
    }
  return (
    <div className="pagination">
        <ul className="list pagination__list">
            {
             pageNumbers.map((number) => {
                return  <li className="pagination__item" key={number}>
                    <button
                        type="button" 
                        className="button pagination__button"
                        onClick={() => handlePageNumberOnClick(number)}
                        
                    >
                        {number}
                    </button>
                 </li>
             })   
            }

        </ul>
    </div>
  )
};

export default Pagination;