import React from 'react';

const Pagination = ({currentPage, totalItems, itemsPerPage, goNext, goPrev}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = totalPages !== currentPage + 1;

  // console.log(isPrevPageAvailable);
  console.log('isNextPageAvailable ' + isNextPageAvailable);

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
        disabled={!isNextPageAvailable}
        onClick={goNext}
      >
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
