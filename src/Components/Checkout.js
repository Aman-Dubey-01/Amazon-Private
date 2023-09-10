import './Checkout.scss';
import sale2 from '../assets/sale4.jpg'
import sale3 from '../assets/sale3.jpg'
import offer from '../assets/offer.jpg'
import CartCard from './CartCard';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import Currency from './Currency';
import Message, { EmptyCart } from './Message';


const Checkout = () => {
  // const [{ basket }, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  let deliveryCharge;
  if (basket.length != 0) {
    if (getBasketTotal(basket) < 1000) {
      deliveryCharge = 49;
    }
    else {
      deliveryCharge = 0;
    }
  }
  else {
    deliveryCharge = 0;
  }


  return (

    <div className="Checkout">
      {user ?
         basket?.length !== 0 ? <>
          <div className="left-side">
            {/* <div className="banner">
          <img src={sale2} alt="" />
          <img src={sale3} alt="" />
        </div> */}

            <div className="left-content">
              <h1>Your shopping Basket</h1>
              <hr />
              <div className="cart-product">
                {basket.map(items => (
                  <CartCard
                    id={items.id}
                    title={items.title}
                    price={items.price}
                    image={items.image}
                    rating={items.rating}
                  />
                ))}

              </div>
            </div>
          </div>


          {/* Right side content */}

          <div className="right-side">

            <div className="order-summary">
              <button onClick={e => navigate('/payments')} >Proceed to Checkout</button>
              <p>By placing your order, you agree to Amazon.in's <span>privacy notice</span> and  <span>condition of use</span> </p>
              <hr />


              <h3>Order summary</h3>
              <div className="options">
                <h4>Items ({basket.length}) :</h4>
                <h5> ₹{getBasketTotal(basket)}</h5>
              </div>
              <div className="options">
                <h4>Shipping Charges :</h4>
                <h5> ₹{deliveryCharge}</h5>
              </div>
              <div className="options">
                <h4>Tax :</h4>
                <h5><Currency value={getBasketTotal(basket) * (0.12)} /> </h5>
              </div>
              <div className="options">
                <h4>Discount (10%) :</h4>
                <h5><Currency value={getBasketTotal(basket) * (0.10)} /> </h5>
              </div>

              <div className="gift">
                <input type="checkbox" />
                <span>This order contains a gift</span>
              </div>
              <hr />
              <div className="options total">
                <h4>Order Total :</h4>
                <h5>
                  <Currency
                    value={Math.round(getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1))} />
                </h5>
                {/* <h5> ₹{getBasketTotal(basket) + deliveryCharge + getBasketTotal(basket) * (0.18) - getBasketTotal(basket) * (0.1)}</h5> */}
              </div>
            </div>
            {/* <img src={offer} alt="" /> */}
          </div>
        </>
          : <EmptyCart /> 
      :<Message />}
    </div>
  )
}

export default Checkout;