import React, { useState } from 'react'
// import axios from 'axios';
import ProductForms from '../components/ProductForms';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    const removeFromDom = id => {
        setProduct(product.filter(product => product._id !== id));
    }

    return (
        <div>
            <ProductForms product={product} setProduct={setProduct} />
            <hr/>
            <p>ALL PRODUCTS</p>
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;