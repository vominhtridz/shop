import './App.css'
import Size from'./component/size/Size'
import Cart from './component/cart/Cart'
import Home from './component/Home'
import { useEffect,useState } from 'react';
import {Item} from './component/Items/Items'
import mycontext from './mycontext'
function App() {
  const [products , setProduct] = useState(Item);
  const [selectSize, setSelectSize] = useState('L');
  const [cartItems,setCartItem] = useState([]);
  const addToCart = (product)=>setCartItem([...cartItems, product]);
  useEffect(()=>{
    let string = '$13'
    console.log(string.replace('$', ''))
  },[])
  return (
    <mycontext.Provider value={{products,selectSize,addToCart}} >
      <div className="App ">
      <Size selectedSize= {selectSize} onSelectSize={setSelectSize}/>
      <Home products = {products.filter((product)=>product.size === selectSize)}  />
      <Cart cartItem={cartItems}/>
      </div>
    </mycontext.Provider>
  );
}

export default App;
