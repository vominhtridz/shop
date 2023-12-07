// Ví dụ đường dẫn tương đối


import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
function StoreCarts() {
    const Products = useSelector((state) => state.Products.value)
    useEffect(()=>{
console.log(Products)
    },[Products])
    return ( <div className='store'>
        <h2 >Sản Phẩm đã mua</h2>
        <section>
            <ul>
                {/* {
                    Products.map((product)=>{
                        return (
                        <li>
                            <h5>{product.title}</h5>
                            <p></p>
                        </li>
                        )
                    })
                } */}
                <li>
                    <h5>ui doi oi</h5>
                    <img src='' alt='asd'/>

                </li>
            </ul>
        </section>
    </div> );
}

export default StoreCarts;