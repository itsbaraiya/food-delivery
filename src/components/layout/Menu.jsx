import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Menu({ image, rating, price, description, title, renderRatingIcon, id }) {
    const { addToCart } = useContext(CartContext);    

    return (
      <div className="col-md-6 col-lg-4 col-xl-3">
          <Card className='overflow-hidden h-100'>
              <div className="overflow-hidden">
                  <Card.Img variant="top" src={image} />
              </div>
              <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                      <div className="item_rating">{renderRatingIcon(rating)}</div>
                      <div className="wishlist">
                          <i className="bi bi-heart"></i>
                      </div>
                  </div>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                      <div className="menu_price">
                          <h5 className='mb-0'>${price}</h5>
                      </div>
                      <div className="add_to_cart">
                      <button onClick={() => {                            
                            addToCart({ id, image, title, price, rating });
                        }}>
                            <i className="bi bi-bag me-2"></i> Add To Cart
                        </button>

                          <Link to="/cart" className="view-cart-btn">
                              <i className="bi bi-cart"></i> View Cart
                          </Link>
                      </div>
                  </div>
              </Card.Body>
          </Card>
      </div>
    );
}

export default Menu;
