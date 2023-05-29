import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Employee from './components/Employee';
import Login from './components/Login';
import Details from './components/Details';
function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/details' element={<Details/>}></Route>
         <Route path='/employees' element={<Employee/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;



