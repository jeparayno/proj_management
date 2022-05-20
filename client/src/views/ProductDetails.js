import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/getOneProd/' + id)
            .then( res => setProduct(res.data))
            .catch(err => console.log(err + " Not Connected"));
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/home`}>Back</Link>
        </div>
    )
}
export default ProductDetails;