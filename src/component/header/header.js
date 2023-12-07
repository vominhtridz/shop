import { faSearch } from '@fortawesome/free-solid-svg-icons';
import IconHome from '..//..//img/icon_home/home.jpg'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Header() {
    return ( 
        <header className='header'>
          <main className='header_icon'>
          <Link to='/' >
            <img src={IconHome} alt='home' className='header_icon-img'/>
          </Link>
          <Link  to='/'>trang chủ</Link>
          <Link  to='/cart'>Sản Phẩm đã mua</Link>
          <Link  to='/'>Thanh Toán</Link>
          </main>
          <section className='head_input'>
         <div className='input'>
         <input type='text' placeholder='Tìm kiếm sản phẩm'>
          </input>
            <FontAwesomeIcon  icon={faSearch} className='icon_search'/>
         </div>
          {/* fetch dữ liệu wor đây */}
          </section>
          <section className='account'>
            <Link className='Link' to='/loggin'>Đăng Nhập</Link>
            <Link className='Link' to='/register'>Đăng kí</Link>
          </section>
        </header>
   );
}

export default Header;