import React from "react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const PaginationMenu = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto flex justify-center my-10">
        <button onClick={() => {currentPage === 1 ? paginate(currentPage) : paginate(currentPage - 1); }}
          className="h-10 px-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
        >
          <span className="sr-only">Previous</span>
          <BiChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        {pageNumbers.map(number => (
          <button key={number} className="page-item">
            <a onClick={() => paginate(number)} className={
              currentPage === number
              ? "px-2.5 py-2.5 border rounded-md text-indigo-900 bg-gray-200"
              : "px-2.5 py-2.5 border rounded-md text-indigo-600 bg-transparent text-bold hover:text-indigo-900"}>
              {number}
            </a>
          </button>
        ))}
        <button onClick={() => {currentPage * postsPerPage >= totalPosts ? paginate(currentPage) : paginate(currentPage + 1); }}
          className="h-10 px-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
        >
          <span className="sr-only">Next</span>
          <BiChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
    </div>
  )
}

export default PaginationMenu;