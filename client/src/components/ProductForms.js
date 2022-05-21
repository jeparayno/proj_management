import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Assets/Style.css';

const ProductForms = (props) => {
    const navigate = useNavigate();
    const {product, setProduct} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description  
        })
            .then(res=>{
                // console.log(res); 
                // console.log(res.data);
                setProduct([...product, res.data ]);
                navigate('/home');
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div className='form-group mb-4 align-item-center'>
                <label for="productTitle"> Product Title </label>
                <input type="text" class="form-control mx-sm-3" onChange = {(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-group mb-4 align-item-center'>
                <label for="productPrice"> Product Price </label>
                <input type="number" class="form-control mx-sm-3" onChange = {(e)=>setPrice(e.target.value)} />
            </div>
            <div className='form-group mb-4 align-item-center'>
                <label for="productDescription"> Product Description </label>
                <input type="text" class="form-control mx-sm-3" onChange = {(e)=>setDescription(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
            &nbsp;
            <Link to={`/home`}><button type="button" class="btn btn-info">Home</button></Link>
        </form>
    )
}
export default ProductForms;
