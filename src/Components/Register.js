import React, { useState } from 'react';
import logo from '../assets/amazon_black.png';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';


const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)

            .then(auth => {
                navigate('/')
                const user = auth.user;
                user.updateProfile({
                    displayName: username,
                    
                });
                navigate('/');
            })
            // .then((auth) => {
            //     const user = auth.user;
            //     return user.updateProfile({
            //         displayName: username,
            //         navigate('/');
            //     });

            // })
            .catch(error => alert(error.message))
    }



    return (
        <div className="login">
            <img src={logo} alt="" />

            <div className="form">
                <h1>Register </h1>
                <form action="" class="contact__form">
                    <div class="contact__form-div">
                        <label htmlFor="" >Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={username}
                            name='username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div class="contact__form-div">
                        <label htmlFor="" >E-mail</label>
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            value={email}
                            name='email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="contact__form-div">
                        <label for="" >Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="user_email"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>


                    <button class="signin-btn btn" onClick={register} >Create your Amazon account</button>


                    <p>By signing-in you agree to Amazon's <span>Condition of Use & Sale</span>.Please see our
                        <span> Privacy Notice</span>,our <span>Cookies Notice</span> and our interest-Based Ads Notice</p>

                    <Link to='/login'>
                        <button class="create-btn  btn" >Sign in</button>
                    </Link>


                </form>

            </div>
            <Link to='/' >Back to home</Link>
        </div>
    )
}

export default Register;