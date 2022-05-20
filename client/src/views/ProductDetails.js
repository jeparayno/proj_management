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
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/home`}>Back</Link>
            <br />
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}
export default ProductDetails;