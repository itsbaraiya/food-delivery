import React from 'react'
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";
import { Carousel } from "react-bootstrap";

function Testimonials() {
 
  const clients = [
    { id: 1,
      image:User1,
      description: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      name: "John Doe",
    },
    { id: 2,
      image:User2,
      description: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      name: "AMELIE NEWLOVE",
    },
    { id: 3,
      image:User3,
      description: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      name: "Edward Johnson",
    },
    { id: 4,
      image:User4,
      description: "Etiam sapien sem at sagittis congue augue massa varius sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ",
      name: "Emma",
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row">
          <Carousel>
            {clients.map((client, index) => {
              const {image, description, name } = client;
              return (
                <Carousel.Item key={index}>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={image} className="img-fluid" alt="User-1" />
                  </div>
                  <p>
                    {description}
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY {name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
      </div>        
    </section>
  )
}

export default Testimonials
