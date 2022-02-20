import React from 'react'
import Slider from "react-slick";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

function Startups() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          }
        }
     ]
  };
  const logs = [1,2,3,4,5,6,7,8,9];
  const styles={
    margin:"0px 10px",
  }

  return (

    <section className="Startups">
        <div className="lock">
            <h2>Startups Funded Via Open VC</h2>
            <hr/>
          <Slider {...settings}>
              {
                logs.map(()=>{
                  return(
                    <div>

                      <div class="box" style={styles}>
                        <img src="./img/diamond.png" alt=""/>
                      </div>
                    
                  </div>
                  )     
                }) 
              }
      
          </Slider>

            <i className="fas fa-arrow-left left" id="left">
              <AiOutlineArrowLeft/>
            </i>
            <i className="fas fa-arrow-right right" id="right">
              <AiOutlineArrowRight/>
            </i>
        </div>
    <img src="./img/lunar.png" alt="" className="lunar"/>
    <img src="./img/lunar1.png" alt="" className="lunar1"/>
    </section>
  );
}

export default Startups