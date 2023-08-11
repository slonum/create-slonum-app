/* eslint-disable indent */
import { useEffect, useState } from 'react';

export const usePagination = (
  contentPerPage: number,
  count: number,
  delta = 7,
) => {
  const [page, setPage] = useState<number>(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const dots = pagination(page, pageCount, delta);

  useEffect(() => {
    setPage(1);
  }, [count, contentPerPage]);

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    dots,
  };
};

const getRange = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

const clamp = (number: number, lower: number, upper: number) => {
  return Math.min(Math.max(number, lower), upper);
};

const pagination = (
  currentPage: number,
  pageCount: number,
  pagesShown: number,
  MINIMUM_PAGE_SIZE = 5,
) => {
  let delta: number;
  currentPage = clamp(currentPage, 1, pageCount);
  pagesShown = clamp(pagesShown, MINIMUM_PAGE_SIZE, pageCount);
  const centerPagesShown = pagesShown - 5;
  const boundaryPagesShown = pagesShown - 3;

  if (pageCount <= pagesShown) {
    delta = pagesShown;
  } else {
    delta =
      currentPage < boundaryPagesShown ||
      currentPage > pageCount - boundaryPagesShown
        ? boundaryPagesShown
        : centerPagesShown;
  }

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }
  let pages: (string | number)[] =
    currentPage > delta
      ? getRange(
          Math.min(range.start, pageCount - delta),
          Math.min(range.end, pageCount),
        )
      : getRange(1, Math.min(pageCount, delta + 1));

  if (currentPage > pageCount - boundaryPagesShown && pageCount > pagesShown) {
    pages = getRange(pageCount - delta, pageCount);
  }

  const withDots = (value: number, pair: (string | number)[]) =>
    pages.length + 1 !== pageCount ? pair : [value];
  const lastPage = +pages[pages.length - 1];

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages);
  }

  if (lastPage && lastPage < pageCount) {
    pages = pages.concat(withDots(pageCount, ['...', pageCount]));
  }

  return pages;
};
