import React from 'react'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/shop/appstore.png'
import StoreGoogle from '../../assets/shop/googleplay.png'
import DownloadImage from '../../assets/shop/e-shop.png'
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/brands/brand-11.png'
import Brand2 from '../../assets/brands/brand-12.png'
import Brand3 from '../../assets/brands/brand-13.png'
import Brand4 from '../../assets/brands/brand-14.png'
import Brand5 from '../../assets/brands/brand-15.png'
import Brand6 from '../../assets/brands/brand-16.png'
import Brand7 from '../../assets/brands/brand-17.png'
import Brand8 from '../../assets/brands/brand-18.png'

function HomeShop() {
  return (
    <>
    <section className='shop-section'>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <h4>Download Mobile App And</h4>
                <h2>Save upto 20%</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates ducimus labore necessitatibus neque unde, eveniet quidem, culpa totam blanditiis sunt officia distinctio, aspernatur tenetur rem eius corrupti nemo deserunt!</p>
                <Link to = "/">
                    <img src={StoreIOS} alt="IOS" className='img-fluid me-3 store'/>
                </Link>
                <Link to = "/">
                    <img src={StoreGoogle} alt="Android" className='img-fluid me-3 store'/>
                </Link>
            </div>
            <div className="col-lg-6">
                <img src={DownloadImage} alt="Download Image" />
            </div>
        </div>
      </div>
    </section>
    <section className='brand-section'>
        <div className="container">
            <div className="row">
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} className="img-fluid" alt="brand-1" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand2} className="img-fluid" alt="brand-2" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand7} className="img-fluid" alt="brand-7" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand8} className="img-fluid" alt="brand-8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeShop
