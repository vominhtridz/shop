
import { useContext } from 'react';
import mycontext from '..//mycontext'
import './Home.css'
function Home({products}) {
    const listContext = useContext(mycontext)
    return (<div className='main'>
        <h1 className="heading">16 Product(s) found</h1>
        <section className='box'>
            {products.map((items,index)=>{
                return(
                    <div className='box-items' key={index}>
                <img src ={items.img} className='box-img'/>
                <p className='box-title'>{items.title}</p>
                <div className='size'>
                <span className='size-items'>
                    size: <p>{items.size}</p>                
                </span>
                <nav className='box-coins'>
                <span>{items.coins}</span>
                <span>{items.otherCoins}
                </span>
                </nav>
                </div>
                <button className='box-btn' onClick={()=> listContext.addToCart(items)}>Add to cart</button>
                <span className='box-sale'>Free Shipping</span>
            
            </div>
                )
            })}
           
        </section>

    </div>  );
}

export default Home;