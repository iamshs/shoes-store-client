import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Pagination.css"

const Pagination = ({shoesPerPage,totalShoes,paginate,currentPage}) => {

    let pageNumber = [] ;

    for( let i=1 ; i <= Math.ceil(totalShoes/shoesPerPage) ; i++  ){
     pageNumber.push(i)
    }

    return (
        <nav className='p-container'>
  <ul className='Pagination-ul '>
  {pageNumber.map(number => <li  key={number} >
                    <Link onClick={()=>paginate(number)} 
                    className={`page-link ${currentPage === number ? "active-page" : "inactivePage" }`} 
                    href='!#' >{number} </Link>
                </li> )}
  </ul>
</nav>
    );
};

export default Pagination;