import React, { useState } from 'react'
// import axios from 'axios';
import Form from '../components/Forms';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    return (
        <div>
            <Form product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}
export default Main;