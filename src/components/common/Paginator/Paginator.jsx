import React from 'react';
import classes from './Paginator.module.css';
import { Pagination } from 'antd';

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return (
        <button
          style={{ height: '32px', display: 'flex', alignItems: 'center' }}
        >
          Previous
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button
          style={{ height: '32px', display: 'flex', alignItems: 'center' }}
        >
          Next
        </button>
      );
    }
    return originalElement;
  }

  console.log(pagesCount);
  return (
    <div>
      <Pagination
        total={pagesCount}
        showSizeChanger={false}
        showQuickJumper
        onChange={onPageChanged}
        // showTotal={(total) => `Total ${total} items`}
        itemRender={itemRender}
      />
      <br />

      {/* {pages.map((p) => {
				return (
					<span
						key={p}
						className={`${currentPage === p && classes.selectedPage}  ${
							classes.pageNum
						}`}
						onClick={() => {
							onPageChanged(p);
						}}
					>
						{p}
					</span>
				);
			})} */}
    </div>
  );
};

export default Paginator;
