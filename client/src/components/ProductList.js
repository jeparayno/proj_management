import React, { useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const { product, setProduct } = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/getAllProd")
    	.then(res =>{setProduct(res.data);})
    	.catch(err =>{console.log(err);})
    }, [])

    // const deleteProduct = (idBelow) => {
    //     axios.delete(`http://localhost:8000/api/deleteOneProd/${idBelow}` )
    //         .then( (res) => { 
    //             //console.log(res.data);
    //             setProduct(product.filter((product, index)=>product._id !== idBelow)); 
    //         })
    //         .catch((err) => console.log(err));
    // }
    
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Product</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    product &&
                    product.map((product) => 
                        <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td  className='prodDetTxt'>{product.description}</td>
                        <td><Link to={`/details/${product._id}`}><button type="button" class="btn btn-info">Details</button></Link> &nbsp;     
                            <Link to={`/details/update/${product._id}`}><button type="button" class="btn btn-warning">Edit</button></Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;

