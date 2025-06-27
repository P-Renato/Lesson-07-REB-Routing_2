import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard.jsx";
import { useParams } from "react-router-dom";


export default function Product () {
    const [product, setProduct] = useState(null)
    const {id} = useParams(); 

    useEffect(() => {
        const fetchData = () => fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));

        console.log(product)
        fetchData()
    }, [id])
    return (
        <div>
            {product && (
                <main>
                <img className="w-2xl" src={product.image} alt="product-image" />
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
            </main>


            )}
            
            
        </div>
    )
}