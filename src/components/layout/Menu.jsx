import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Menu({image, rating, price, description, title, renderRatingIcon}) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
        <Card className='overflow-hidden h-100'>
            <div className="overflow-hidden">
                <Card.Img variant="top" src={image}/>
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
                        <Link to="/">
                         <i className="bi bi-bag me-2"></i>
                         Add To Cart
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Menu
