import {useState,useEffect } from 'react';
import {Item} from '../../component/body/Item/item'
import '..//..//App.css'
import Size from'../../component/body/size/size'
import Cart from '../../component/body/cart/cart'
import Home from '../../component/body/home'
import mycontext from '../../mycontext'
// react redux
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreProducts } from '..//..//features/Products/ProductSlice'

function HomePage() {
    const [products , setProduct] = useState(Item);
    const [selectSize, setSelectSize] = useState('L');
    const [cartItems,setCartItem] = useState([]);
    // react redux
    const dispatch = useDispatch()
  
    const addToCart = (product)=>{
        setCartItem([...cartItems, product])
        dispatch(StoreProducts(product))
    };
    const Products = useSelector((state) => state.Products.value)
    useEffect(()=>{
console.log(Products)
    },[Products])
  
    return (
    <mycontext.Provider value={{products,selectSize,addToCart}} >
        <div className="body">
            
            <Size selectedSize= {selectSize} onSelectSize={setSelectSize}/>
            <Home products = {products.filter((product)=>product.size === selectSize)}  />
            <Cart cartItem={cartItems}/>
        </div> 
    </mycontext.Provider>
    
    );
}

export default HomePage;