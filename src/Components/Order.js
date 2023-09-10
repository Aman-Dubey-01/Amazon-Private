import React from 'react'
import './Order.scss'
import moment from "moment";
import Card from './Card';
import Currency from './Currency';

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <div className="payment-product">
                {order.data.basket?.map(item => (
                    <Card
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))}
            </div>
            <div className="order__total">
                <h2>Total : &nbsp;
                    <Currency value={order.data.amount / 100} />
                </h2>
            </div>

        </div>
    )
}

export default Order