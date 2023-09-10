import React from 'react';
import './Message.scss';
import img from '../assets/loginmsg.svg'
import emptycart from '../assets/empty-cart.png'
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
    return (
        <div className='error-message'>
            <img src={emptycart} alt="" />
            <h2>Your Amazon Cart is empty</h2>
            <div className="btn-group">
                <Link to='/'>
                    <button className='btn signin-btn'>Add items</button>
                </Link>
            </div>
        </div>
    )
}

const Message = () => {
    return (
        <div className='error-message'>
            <img src={img} alt="" />
            <h2>Please login to proceed</h2>
            <div className="btn-group">
                <Link to='/login'>
                    <button className='btn signin-btn'>Sign-in to your account</button>
                </Link>
                <Link to='/register'>
                    <button className='btn create-btn'>Sign-up</button>
                </Link>
            </div>
        </div>
    )
}

export default Message;