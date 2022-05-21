import React, {useState} from "react";
import ProductForms from '../components/ProductForms';


const CreateProduct = () => {
    const [product, setProduct] = useState([]);

    return (
        <ProductForms product={product} setProduct={setProduct} />
    )
    
}

export default CreateProduct;