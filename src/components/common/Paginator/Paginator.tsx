import React from "react";
import { Pagination } from "antd";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (currentPage: number) => void;
};

const Paginator: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  return (
    <div>
      <Pagination
        current={currentPage}
        total={pagesCount}
        showSizeChanger={false}
        showQuickJumper
        onChange={onPageChanged}
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
