import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



const Header = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthemtication = () => {
    if (user) {
      auth.signOut();
    }
  }

  // cartbutton animation 
  useEffect(() => {
    if (basket.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [basket]);


  return (
    <>
      <nav className='navbar'>
        <div className="header">
        
          <Link to='/'>
            <img className='header-logo' src={logo} alt="" />
          </Link>

          <div class="search-container">
            <input type="text" placeholder="What are you looking for ?" name="search" ></input>
            <button type="submit"><BsSearch /> </button>
          </div>

          <Link to={!user && '/login'}>
            <div onClick={handleAuthemtication} className="header_options">
              <div className="first-line">Hello,{user ? user?.displayName : 'Guest'} </div>
              <div className="second-line">{user ? 'Sign Out' : 'Sign In'}</div>
            </div>
          </Link>

          <Link to='/orders'>
            <div className="header_options">
              <div className="first-line">Returns</div>
              <div className="second-line">& Orders</div>
            </div>
          </Link>

          {/* <div className="header_options">
          <div className="first-line">Your</div>
          <div className="second-line">Prime</div>
        </div> */}

          <Link to='/checkout'>
            <div className={`header_options cart ${btnIsHighlighted ? 'bump' : ''}`}
            // "header_options cart"
            >
              <div className="first-line"><MdOutlineShoppingCart /></div>
              <div className="second-line"> <span>{basket?.length}</span></div>
            </div>
          </Link>

        </div>
        <div className="header-bar">
          <p> <GiHamburgerMenu /> All</p>
          <p>Amazon Mini TV</p>
          <p>Best Seller's</p>
          <p>Today's Deal</p>
          <p>Gift Idea's</p>
          <p>Mobile</p>
          <p>Electronic</p>
          <p>Fashion</p>
          <p>Home & Kitchen</p>
          <p>Computers</p>
          <p>Books</p>
          <p>Coupons</p>
          <p>Amazon Pay</p>
          <p>Customer Services</p>
          <p>Amazon Prime</p>

        </div>
      </nav>
    </>
  )
}

export default Header;