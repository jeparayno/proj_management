import React, { useState } from 'react'
// import axios from 'axios';

import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    const removeFromDom = id => {
        setProduct(product.filter(product => product._id !== id));
    }

    return (
        <>

        <div>
            <h1>ALL PRODUCTS</h1>
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom} />
        </div>
        </>
    )
}
export default Main;