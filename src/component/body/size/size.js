import './size.css'

function Size({selectedSize, onSelectSize}) {
    const sizes = [
        'XS',
        'S',
        'M',
        'ML',
        'L',
        'XL',
        'XXL',
    ]
    return ( <div className='wrapper'>
        <h1 className='heading'>Sizes:</h1>
        <nav className='nav'>
        {
            sizes.map((size,index)=>{
                return(
                    <button key={index} onClick={()=>selectedSize == '' ? onSelectSize('L') : onSelectSize(size)}
                    className={`size ${selectedSize ===size ? 'selected': ''}`}
                    >
                        {size}
                    </button>
                )
            })
        }
        
        </nav>
        <span>Leave a star on Github if this <br/>
        repository was useful
        </span>
    <a href =''>Star</a>
    </div> );
}

export default Size;