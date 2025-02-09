import React from 'react'
import HeroImage from '../../assets/hero/hero-2.png';
import { Link } from 'react-router-dom';

function ShopLandingSection() {
  return (
         <section className='hero-banner shop-landing-section overlay'>
            <div className="container">
                <div className="row position-relative z-2">
                    <div className="col-lg-7">
                        <div className="position-relative">
                            <div className="price-badge">
                                <div className="price-badge__text">
                                    <h4 className='h4_xs'>Only</h4>
                                    <h4 className='h3_lg'>₹90</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="hero-banner__content text-white">
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Onion</h2>
                            <p className='text-white pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum? Aliquam aliquid aut provident minus earum assumenda totam, voluptatibus sapiente placeat, commodi expedita autem? Possimus, omnis saepe! Neque, laborum unde?</p>
                            <Link to="/" className='btn order_now'>Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
  )
}

export default ShopLandingSection
