import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.scss'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import Message from './Message';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [user])

    return (
        <>
            {user ?
                <div className='orders'>
                    <div className='orders__order'>
                        {orders?.map(order => (
                            <Order order={order} />
                        ))}
                    </div>
                </div> :
                <Message />}
        </>

    )
}

export default Orders;