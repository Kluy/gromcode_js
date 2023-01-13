import React from 'react';

const Pagination = ({currentPage, totalItems, itemsPerPage, goNext, goPrev}) => {
  const pagesTotal = Math.ceil(totalItems / itemsPerPage);
  let isPrevPageAvailable = currentPage === 0;
  let isNextPageAvailable = pagesTotal === currentPage + 1;

  return (
    <div className="pagination">
      <button
        className="btn"
        disabled={isPrevPageAvailable}
        onClick={goPrev}
      >
        {isPrevPageAvailable || '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        className="btn"
        disabled={isNextPageAvailable}
        onClick={goNext}
      >
        {isNextPageAvailable || '→'}
      </button>
    </div>
  );
};

export default Pagination;
