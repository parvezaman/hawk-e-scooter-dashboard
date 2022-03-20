import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';


const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/scooters")
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [allProducts])
    return (
        <div style={{ margin: '1rem 0 0 5rem' }}>
            {
                allProducts.map(allProducts=><ShowProducts
                key={allProducts._id}
                allProducts = {allProducts}
                />)
            }
        </div>
    );
};

export default AllProducts;