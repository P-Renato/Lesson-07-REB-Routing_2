import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () =>
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));

    console.log(products);

    fetchData();
  }, []);
  return (
    <div>
      <h1>Our Products:</h1>
      <div className="flex flex-wrap m-2 gap-25">
        {products.map((product) => (
            <NavLink to={`../product/${product.id}`} key={product.id}>
          <ProductCard product = {product} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
