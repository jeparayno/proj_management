import React, { useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/getAllProd")
    	.then(res =>{setProduct(res.data);})
    	.catch(err =>{console.log(err);})
    }, [])
    
    return (
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            {/* Commented below to show only the Title Page of the Specific Product */}
                            {/* <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p> */}
                            <Link to={`/details/${product._id}`}>
                                {product.title}'s Page'
                            </Link>
                            <br />
                            <Link to={`/details/update/${product._id}`}>Edit</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;