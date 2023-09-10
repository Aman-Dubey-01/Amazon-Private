import './App.scss';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';
import Register from './Components/Register';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payments from './Components/Payments';
import Orders from './Components/Orders';
import Message from './Components/Message';


const promise = loadStripe('pk_test_51NkL0tSEekMbqjrUHek9k8OeC5gBpkdD0SDLUlQTUDkQ5hEDcAmxemQbAv7u7cQ0KVfJLF2VL2WvlFsfvJkwxsTk00sT9b3m30');

function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {

        console.log("user :", authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Header />
          <Home />
        </>,
    },
    {
      path: "/checkout",
      element:
        <>
          <Header />
          <Checkout />
        </>,
    },
    {
      path: "/orders",
      element:
        <>
          <Header />
          <Orders />
        </>,
    },
    {
      path: "/payments",
      element:
        <>
          <Header />
          <Elements stripe={promise}>
            <Payments />
          </Elements>

        </>,
    },
    {
      path: "/login",
      element:
        <>
          <Login />
        </>,
    },
    {
      path: "/register",
      element:
        <>
          <Register />
        </>,
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
