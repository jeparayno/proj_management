import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

const App = () => {
    
    return(
	<div className='App'>
    	<BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default />
          <Route element={<ProductDetails/>} path="/details/:id" />
        </Routes>      
    	</BrowserRouter>
        </div>
    ) 
}
export default App;