import React from 'react';

const Pagination = (props) => {
  const pagesTotal = Math.ceil(props.totalItems / props.itemsPerPage);
  let isPrevPageAvailable = props.currentPage === 1;
  let isNextPageAvailable = pagesTotal === props.currentPage;

  return (
    <div className="pagination">
      <button
        className="btn"
        disabled={isPrevPageAvailable}
        onClick={props.goPrev}
      >
        {isPrevPageAvailable || '←'}
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button
        className="btn"
        disabled={isNextPageAvailable}
        onClick={props.goNext}
      >
        {isNextPageAvailable || '→'}
      </button>
    </div>
  );
};

export default Pagination;
