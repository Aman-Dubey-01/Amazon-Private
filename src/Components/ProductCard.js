import React from 'react';
import './ProductCard.scss';
import { useStateValue } from './StateProvider';
import Currency from './Currency';

const ProductCard = (props) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating:props.rating 
      },
    });
  };

const MRP = props.price*1.1;

  return (
    <div className="product">
      <h3>{props.title}</h3>
      <span>{props.rating} ⭐⭐⭐⭐⭐</span>
      <p>₹{props.price} <span>MRP: <Currency value={MRP}/></span></p>
      
      <img src={props.image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default ProductCard;