import React from 'react';
import './CartCard.scss';
import p1 from '../assets/Home/row1img2.jpg'
import { useStateValue } from './StateProvider';

const CartCard = (props) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          id:  props.id,
        });
      };


    return (
        <div className="card">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <h4> Get it by<span>Tomorrow, 21 August</span>  FREE Delivery by Amazon</h4>
                <p>₹{props.price}</p>
                <span>⭐⭐⭐⭐⭐</span>
                <button onClick={removeFromCart}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CartCard;