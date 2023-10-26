import  { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cart.css'
import { useEffect, useState } from 'react';
function Cart({cartItem}) {
    const [cart, setCart] = useState(false);
    const [production, setProduction] = useState([cartItem])
    const [coins, setCoins] = useState('')
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setProduction(cartItem)
        let total = 0; // Initialize a variable to hold the total amount
      
        production.forEach((item) => {
            if(item.length <1) {
                return
            }
          const numericAmount = parseInt(item.coins.replace("$", ""));
          total += numericAmount; // Add the numeric amount to the total
        });
      
        setTotal(total); // Set the total amount in state
        setCoins(`$ ${total}`); // Set the coins value as a string

      }, [cartItem, production])
    const handleShowCart = ()=>{
        setCart(!cart)
    }   
    const handleCart =(e)=>{
        e.preventDefault()

    }
    const handleClose =()=>{
        setCart(false)
    }
     return ( <div className='cart'>
        
       
        <button className='cartbtn' onClick={handleShowCart}>
            <FontAwesomeIcon icon ={faCartShopping}/>
        <span className='cartbtn-item'>
            7
        </span>
        </button>

        { cart &&
         <section className='cart-item' onClick={handleCart}>
            <span className='close' onClick={handleClose}>X</span>
            <div className='cart-text'>
            <button className='cartbtn' >
            <FontAwesomeIcon icon ={faCartShopping}/>
        <span className='cartbtn-item'>
            7
        </span>
    
             </button>
            Cart
            </div>
{           /* list */}
        <ul className="listCart">
            {
                production.length !== 0 ?
                production.map((product,index)=><li className='listCart_Items' key={index}>
                    <img src={product.img} className='listCart_Items-img'></img>
                <nav className='listCart_Items-center'>
                <h4>{product.title}</h4>
                <p>Size: {product.size}</p>
                <p>Quantily 2</p>
            </nav>
            <span className='listCart_Items-coins'>{product.coins}</span>
        </li>)
            : <h1 style={{color: '#fff', textAlign: 'center', fontSize:'30px'}}>Chưa có sản phẩn</h1>
            }
          
            
        </ul>
        <footer className='pay'>
        <div className='payNav'>
            <h6 className='payNav-text'>TOTAL</h6>
            <nav className='pay-total'>
                {coins}
                <p>OR UP TO 12 x $ 9,25</p>
            </nav>
        </div>
        <button className='pay-btn' onClick={()=>{
            if(total == 0) return;
        window.location.reload();
        alert(`Đã mua thành công tổng là ${coins}`);   
    }}>
            CHECKOUT NOW
        </button>
        </footer>
         </section>
         
       }
    </div> );
}

export default Cart;