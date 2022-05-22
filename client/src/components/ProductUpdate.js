import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Assets/Style.css';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const ProductUpdate = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/getOneProd/' + id)
            .then( res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateOneProd/' + id, {
            title,
            price,
            description
        })
            .then( res => {

                navigate('/home');})
            .catch( err => console.log(err));
    }
    return (
        <div className="updateProd">
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label className="prodUpTxt">Title:</label>
                    <br/>
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value)} } />
                </p>
                <p>
                    <label className="prodUpTxt">Price:</label>
                    <br/>
                    <input type="number" name="price" value={price} onChange={(e) => { setPrice(e.target.value)} } />
                </p>
                <p>
                    <label className="prodUpTxt">Description:</label>
                    <br/>
                    <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value)} }  />
                </p>
                <button type="submit" class="btn btn-success">Update</button>
                &nbsp;
                <Link to={`/home`}><button type="button" class="btn btn-info">Back</button></Link>
            </form>
            
        </div>
    )
}

export default ProductUpdate;