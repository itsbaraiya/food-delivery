import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import Card from 'react-bootstrap/Card';
import { renderRatingIcon } from "../Helpers/RatingIcons";


function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const increaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    updateCartQuantity(id, item.quantity + 1);
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      updateCartQuantity(id, item.quantity - 1);
    } else {
      handleRemove(id);
    }
  };

  return (
    <Layout>
      <section className="cart-section menu-section">
        <div className="container">
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty. <Link to="/">Go back to menu</Link></p>
          ) : (
            <div className="cart-items">
                <div className="row">
              {cartItems.map((item) => (  
                   <div className="col-md-3 col-xl-4" key={item.id}>
                   <Card className='overflow-hidden h-100' key={item.id}>
                   <div className="overflow-hidden">
                       <Card.Img variant="top" src={item.image} />
                   </div>
                   <Card.Body>
                       <div className="d-flex align-items-center justify-content-between">
                           <div className="item_rating">{renderRatingIcon(item.rating)}</div>
                           <div className="wishlist">
                               <i className="bi bi-heart"></i>
                           </div>
                       </div>
                       <Card.Title>{item.title}</Card.Title>
                       <Card.Text>{item.description}</Card.Text>
                       <div className="d-flex align-items-center justify-content-between">
                           <div className="menu_price">
                               <h5 className='mb-0'>${item.price}</h5>
                           </div>             
                           <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="mx-1">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => handleRemove(item.id)} className="btn btn_red">Remove</button>           
                       </div>
                   </Card.Body>
                    </Card>
                   </div>
              ))}
                
                </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
