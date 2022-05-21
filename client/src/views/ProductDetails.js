import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/getOneProd/' + id)
            .then( res => setProduct(res.data))
            .catch(err => console.log(err + " Not Connected"));
    }, [])
    
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/deleteOneProd/${id}` )
            .then( (res) => { 
                //console.log(res.data);
                navigate('/home');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='prodDet'>
            <h1> Product Details </h1>
            <h3>Name: {product.title}</h3>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <Link to={`/home`}><button type="button" class="btn btn-info">Back</button></Link>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={deleteProduct}>Delete</button>
        </div>
    )
}
export default ProductDetails;