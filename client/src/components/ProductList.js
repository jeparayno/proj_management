import React, { useEffect} from 'react';
import axios from 'axios';
const ProductList = (props) => {
    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/getAllProd")
    	.then((res)=>{
	    // console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div>
            {
                product.map((product, index)=>{
                return <p key={index}>{product.title}, {product.price}, {product.description}</p>
                })
            }
        </div>
    )
}
export default ProductList;