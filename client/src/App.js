import React from 'react';
import './App.css';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
const App = () => {
    
    return(
	<div className='App'>
    	<BrowserRouter>
            <Routes>
	    <Route element={<Main/>} path="/home" default />
            </Routes>
    	</BrowserRouter>
        </div>
    ) 
}
export default App;