import React from 'react'
import Image1 from '../../assets/menu/burger-11.jpg'
import Image2 from '../../assets/menu/burger-12.jpg'
import Image3 from '../../assets/menu/burger-13.jpg'
import Image4 from '../../assets/menu/burger-14.jpg'
import Image5 from '../../assets/menu/burger-15.jpg'
import Image6 from '../../assets/menu/burger-16.jpg'
import Image7 from '../../assets/menu/burger-17.jpg'
import Image8 from '../../assets/menu/burger-18.jpg'
import Cards from '../../components/layout/Menu'
import { Link } from 'react-router-dom'

function HomeMenu() {

  // Rating Logic
  const renderRatingIcon = (rating) => {
   const stars = [];
   for(let i = 0; i < 5; i++) {
    if(rating > 0.5) {
      stars.push(<i key={i} className='bi bi-star-fill'></i>);
      rating--;
    }
    else if(rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className='bi bi-star-half'></i>);
      rating--;
    }
    else {
      stars.push(<i key={`empty ${i}`} className='bi bi-star'></i>);
    }
   }
   return stars;
  };

  const burgers = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      image: Image1,
      description: "A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomato, and our signature sauce.",
      rating: 4.8,
      price: 5.99,
    },
    {
      id: 2,
      title: "BBQ Bacon Burger",
      image: Image2,
      description: "Smoky BBQ sauce, crispy bacon, melted cheese, and grilled onions on a toasted bun.",
      rating: 1.8,
      price: 6.99,
    },
    {
      id: 3,
      title: "Spicy Jalapeño Burger",
      image: Image3,
      description: "Loaded with fresh jalapeños, pepper jack cheese, and spicy mayo for a fiery kick.",
      rating: 3.5,
      price: 6.49,
    },
    {
      id: 4,
      title: "Mushroom Swiss Burger",
      image: Image4,
      description: "Sautéed mushrooms, Swiss cheese, and creamy garlic aioli on a buttery brioche bun.",
      rating: 4.9,
      price: 7.29,
    },
    {
      id: 5,
      title: "Crispy Chicken Burger",
      image: Image5,
      description: "Crispy fried chicken breast with lettuce, pickles, and house-made ranch sauce.",
      rating: 4.5,
      price: 5.79,
    },
    {
      id: 6,
      title: "Double Trouble Burger",
      image: Image6,
      description: "Double beef patties, double cheese, caramelized onions, and special sauce.",
      rating: 4.9,
      price: 8.99,
    },
    {
      id: 7,
      title: "Veggie Delight Burger",
      image: Image7,
      description: "A plant-based patty with avocado, lettuce, tomato, and a tangy vegan sauce.",
      rating: 2.3,
      price: 6.29,
    },
    {
      id: 8,
      title: "Hawaiian Teriyaki Burger",
      image: Image8,
      description: "Grilled pineapple, teriyaki glaze, and Swiss cheese on a toasted sesame bun.",
      rating: 4,
      price: 7.49,
    },
  ];
  
  return (
    <div>
      <section className='menu-section'>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2>Our Crazy Food Items</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae et culpa nesciunt magnam velit nihil explicabo ratione omnis, facere autem excepturi magni praesentium placeat laudantium quasi recusandae sed minima est.</p>                
              </div>
            </div>
            <div className="row justify-content-md-center g-4">
              {burgers.map((burger, index) => {
                const { image, rating, price, description, title } = burger;
                return (
                <Cards key={index} image={image} description={description} title={title} price={price} rating={rating} renderRatingIcon = {renderRatingIcon}/>
                );
              })}
            </div>
            <div className="row pt-5">
              <div className="col-sm-6 col-lg-5">
                <div className="ads_box ads_img1 mb-5 mb-md-0">
                  <h4 className='mb-0'>GET YOUR FREE</h4>
                  <h5>CHEESE FRIES</h5>
                  <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
                </div>
              </div>
              <div className="col-sm-6 col-lg-7">
                <div className="ads_box ads_img2">
                  <h4 className='mb-0'>GET YOUR FREE</h4>
                  <h5>CHEESE FRIES</h5>
                  <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomeMenu
