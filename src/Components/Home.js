import React from 'react';
import './Home.scss';
import home1 from '../assets/home1.jpg';
import img1 from '../assets/Home/row1img1.jpg';
import img2 from '../assets/Home/row1img2.jpg';
import img3 from '../assets/Home/row1img3.png';
import img4 from '../assets/Home/row1img4.png';

import p1 from '../assets/Home/Product/row2p1.jpg';
import p2 from '../assets/Home/Product/row2p2.jpg';
import p3 from '../assets/Home/Product/row2p3.jpg';

import shoe from '../assets/Home/Product/shoe.png';
import cream from '../assets/Home/Product/cream.jpg';
import ear from '../assets/Home/Product/ear.jpg'
import ladder from '../assets/Home/Product/ladder.webp'
import ProductCard from './ProductCard';


const Home = () => {

    return (
        <div className="home">
            <div className="home-main">
                <div className="home-img">
                    <img src={home1} alt="" />
                </div>
                {/* <div className="home-img">
                    <img src={home3} alt="" />
                </div> */}
            </div>


            <div className="home-offer">
                <div className="first-row">
                    <div className="card">
                        <div className="title">
                            <h2>Up to 70% off | Clearance store</h2>
                        </div>
                        <div className="image">
                            <img src={img1} alt="" />
                        </div>
                        <a href="">See more</a>
                    </div>
                    <div className="card">
                        <div className="title">
                            <h2>Starting ₹99 | All your home improvement needs</h2>
                        </div>
                        <div className="image">
                            <img src={img3} alt="" />
                        </div>
                        <a href="">Explore all</a>
                    </div>
                    <div className="card">
                        <div className="title">
                            <h2>Bluetooth Calling Smartwatch starts at ₹1,999</h2>
                        </div>
                        <div className="image">
                            <img src={img2} alt="" />
                        </div>
                        <a href="">See more</a>
                    </div>

                    <div className="card">
                        <div className="title">
                            <h2>Revamp your home in style</h2>
                        </div>
                        <div className="image">
                            <img src={img4} alt="" />
                        </div>
                        <a href="">Explore all</a>
                    </div>
                </div>


                <div className="second-row">
                    <div className="rowhead">
                        <h2>Today’s Deals</h2>
                        <a href="">See all deals</a>
                    </div>

                    <div className="product-container">
                        <ProductCard
                            id={1}
                            title={'OnePlus Bullets Wireless Bluetooth in Ear Earphones with Mic'}
                            price={1999}
                            image={ear}
                            rating={4.3}
                        />
                        <ProductCard
                            id={2}
                            title={'Prime Amaze Multipurpose (12Ft.) Made in India Foldable Aluminium Ladder '}
                            price={9999}
                            image={ladder}
                            rating={4.8}
                        />
                        <ProductCard
                            id={3}
                            title={'Fixderma Nigrifix Cream for Acanthosis Nigricans'}
                            price={499}
                            image={cream}
                            rating={3.9}
                        />
                        <ProductCard
                            id={4}
                            title={'Red Chief Leather Derby Black Formal Shoe for Mens'}
                            price={2249}
                            image={shoe}
                            rating={5}
                        />
                    </div>

                </div>
                <div className="third-row">
                    <div className="rowhead">
                        <h2>Up to 45% off | Furniture for your comfort</h2>
                        <a href="">See all deals</a>
                    </div>

                    <div className="product-container">
                        <img src={p1} alt="" />
                        <img src={p2} alt="" />
                        <img src={p3} alt="" />
                        <img src={p1} alt="" />
                        <img src={p2} alt="" />
                        <img src={p3} alt="" />
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Home;