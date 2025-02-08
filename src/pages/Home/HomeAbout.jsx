import React from 'react'
import Layout from '../../components/layout/Layout'
import Pizza from '../../assets/about/pizza.png'
import Salad from '../../assets/about/salad.png'
import Delivery from '../../assets/about/delivery-bike.png'
import { Link } from 'react-router-dom'

function about() {
  const projects = [
    {
      id: 1,
      title: "Original",
      image: Pizza,
      description: "A personal portfolio website built with React, showcasing projects and skills with a modern UI.",
    },
    {
      id: 2,
      title: "Quality Food",
      image: Salad,
      description: "An online shopping platform with product listings, cart functionality, and secure checkout.",
    },
    {
      id: 3,
      title: "Fastest Delivery" ,
      image: Delivery,
      description: "A simple task management app allowing users to add, delete, and mark tasks as completed.",
    },
  ];

  return (
    <>            
        <section className='about-section'>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2>The burger tastes better when you eat with your family.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae et culpa nesciunt magnam velit nihil explicabo ratione omnis, facere autem excepturi magni praesentium placeat laudantium quasi recusandae sed minima est.</p>
                <Link to="/" className='btn order_now btn_red'>Explore Full Menu</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="about_wrapper">
          <div className="container">
              <div className="row justify-content-md-center">
                {projects.map((card, index) => {
                  const {title, image, description} = card;
                  return (
                    <div className="col-md-6 col-lg-4 mb-4 mb-md-0" key={index}>
                      <div className="about_box text-center">
                        <div className="about_icon">
                          <img src={image} alt="Card Image" className='img-fluid' />
                        </div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </section>        
    </>
  )
}

export default about
