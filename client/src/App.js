import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductUpdate from './components/ProductUpdate';
import CreateProduct from './components/CreateProduct';
import Navbar from './components/Navbar';

const App = () => {
    
    return(
	<div className='App'>
    	<BrowserRouter>
        <Navbar />
        <Routes>
            <Route element={<Main/>} path="/home" default />
            <Route element={<CreateProduct />} path="/create" />
            <Route element={<ProductDetails/>} path="/details/:id" />
            <Route element={<ProductUpdate />} path="/details/update/:id" />
        </Routes>      
    	</BrowserRouter>
        </div>
    ) 
}
export default App;