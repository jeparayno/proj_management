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
        <form onSubmit={onSubmitHandler} className="prodForm" encType='multipart/form-data'>
            <div className='form-group mb-4 align-item-center'>
                <label for="productTitle" className='prodTxt'> Product Name </label>
                <input type="text" class="form-control mx-sm-3" onChange = {(e) => setTitle(e.target.value)} placeholder="Name" />
            </div>
            <div className='form-group mb-4 align-item-center'>
                <label for="productPrice" className='prodTxt'> Product Price </label>
                <input type="number" class="form-control mx-sm-3" onChange = {(e)=>setPrice(e.target.value)} placeholder="Price" />
            </div>
            <div className='form-group mb-4 align-item-center'>
                <label for="productDescription" className='prodTxt'> Product Description </label>
                <textarea class="form-control mx-sm-3" onChange = {(e)=>setDescription(e.target.value)} placeholder="Description" />
            </div>
            <div className='form-group mb-4 align-item-center'>
                <label for="image">Upload File </label>
                <input type="file" name="image" id="image" class="form-control-file"></input>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
            &nbsp;
            <Link to={`/home`}><button type="button" class="btn btn-info">Cancel</button></Link>
        </form>
    )
}
export default ProductForms;
