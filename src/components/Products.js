import React from 'react'


const Products = () => {

    const products = ["Learning React", "Pro React", "Begining React"]

    const listProducts = products.map((product) =>
        <li key={product.toString()}>{product}</li>
    )
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {listProducts}
            </ul>
        </div>
    );
}

export default Products;