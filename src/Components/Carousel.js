import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Televiseur from '../Assets/Images/Television.jpg'
import lavelinge from '../Assets/Images/lave-linge.jpg'
import Refrigerateur from '../Assets/Images/refrigerateur.webp'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const slides = [
  {
    image:
      Televiseur
  },
  {
    image:
      lavelinge
  },
  {
    image:
      Refrigerateur
  }

];
const Contenant = styled.div`


`

const Carouseldiv = () => {
  console.log(slides)

    return(
        <Carousel  infiniteLoop autoPlay showThumbs={false} width='auto'>
      
              {slides.map((slide)=>{return(
                <Contenant >
                <img style={{width:500}} src={slide.image}/>)
                </Contenant>)
              })}          
        </Carousel>


  
    )
}

export default Carouseldiv;