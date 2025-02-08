import React from 'react'
import PromotionImage from '../../assets/promotion/pro.png'

function Promotion() {
  return (
    <>
    <section className='promotion-section'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center mb-5 mb-lg-0">
                    <img src={PromotionImage} alt="Promotion Image" className='img-fluid' />
                </div>
                <div className="col-lg-6 px-5">
                    <h2>Nothing brings peopletogether like a good food!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias rem quis modi maxime nostrum ratione nihil id voluptatum aut. Voluptatibus laborum asperiores rerum maxime dignissimos perferendis consequatur ex eos maiores.</p>
                    <ul>
                        <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero. Quasi libero et quod itaque ipsam, reprehenderit repellat voluptatibus sequi. Alias ex provident quos error amet obcaecati numquam impedit iste.</p>
                        </li>
                        <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero. Quasi libero et quod itaque ipsam, reprehenderit repellat voluptatibus sequi. Alias ex provident quos error amet obcaecati numquam impedit iste.</p>
                        </li>
                        <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, libero. Quasi libero et quod itaque ipsam, reprehenderit repellat voluptatibus sequi. Alias ex provident quos error amet obcaecati numquam impedit iste.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className='bg-parallax-scroll'>
    </section>
    </>
  )
}

export default Promotion
