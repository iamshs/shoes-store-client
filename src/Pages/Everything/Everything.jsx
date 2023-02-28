import React, { useEffect, useState } from "react";
import AllProducts from "../../Components/AllProducts";
import Pagination from "../../Components/Pagination";
import Spinner from "../../Components/Spinner";

const Everything = () => {
  const [products, setProducts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage] = useState(8);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDataLoading(false);
      });
  }, []);

  const indexOfLastShoe = currentPage * shoesPerPage;
   const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
   const currentShoes = products.slice(indexOfFirstShoe, indexOfLastShoe);

  if (dataLoading) {
    return <Spinner />;
  }

  //change page
  const paginate = (page) => setCurrentPage(page);

  return (
    <div>
      <div></div>
      <div>
        <AllProducts products={currentShoes} />
      </div>
      <div>
      <Pagination  shoesPerPage={shoesPerPage}
        totalShoes={products.length}
        paginate={paginate}
        currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Everything;
