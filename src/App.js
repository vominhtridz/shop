import './App.css'
import React from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import HomePage from './pages/home/HomePage'
import {  Route, Routes } from 'react-router-dom';
import Loggin from './pages/loggin/loggin';
import Register from './pages/register/register';
import StoreCarts from './pages/StoreCarts/StoreCarts';
function App() {

  return (
    <div className='App'>
          <Header/>
          <Routes>
          <Route path='/'  element={<HomePage/>}/>
          <Route path='/loggin'  element={<Loggin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<StoreCarts/>}/>
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
