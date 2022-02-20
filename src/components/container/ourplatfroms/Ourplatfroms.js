import React, { Component } from 'react';
import Slider from "react-slick";
import {AiOutlineDown} from "react-icons/ai";



class Ourplatfroms extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                  }
                }
             ]
        };

        const cards = [1,2,3,4,5,6,7,8,9]
        const styles = {
            margin: "0px 10px",
        }


        return(

            <section className="Ourplatfroms" id="Explore" >
                <h2>A Show of our platform founders</h2>

                <Slider {...settings}>

                    {
                        cards.map((index)=>{
                            return(
                                <div style={{
                                    backgroundColor:"",
                                }}>
                                    <div className="box" style={styles}>
                                    <img src="./img/slick-img.png"alt=""/>
                                    <a href="">
                                        Discover 
                                        <i className="fas fa-angle-right">
                                        <AiOutlineDown size={20} color={'black'}/> 
                                        </i>
                                    </a>
                                    <p>Founder of <span>Flite {index} </span>, A flight training VR software used by Boeing.</p>
                                    </div>
                                </div> 
                            )
                        })
                    }
   
                </Slider>

            </section>

        );
    }
}
export default Ourplatfroms;

