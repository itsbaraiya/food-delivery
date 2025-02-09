import React from 'react'
import LandingAbout1 from '../../assets/about/Chefs.jpg'
import LandingAbout2 from '../../assets/about/about2.jpg'

function AboutLanding() {
  return (
    <section className='hero-banner about-landing-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text-center">
                  <div className="hero-banner__content">
                    <h1>Who
                      We 
                      Are</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, rerum? Aliquam aliquid aut provident minus earum assumenda totam, voluptatibus sapiente placeat, commodi expedita autem? Possimus, omnis saepe! Neque, laborum unde?</p>
                  </div>
                </div>
                <div className="col-lg-8">
                <div className="landing-section__images d-flex flex-column align-items-center">
                    <img src={LandingAbout1} alt="Landing Section About Image" className='img-1' />
                    <img src={LandingAbout2} alt="Landing Section About Image" className='img-2' />
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutLanding
