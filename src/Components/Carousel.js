import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Televiseur from '../Assets/Images/Television.jpg'
import lavelinge from '../Assets/Images/lave-linge.jpg'
import Refrigerateur from '../Assets/Images/refrigerateur.webp'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slides = [
  {
    image:Televiseur,
    Produits:'Televiseur'
  },
  {
    image:
      lavelinge,
      Produits:'lavelinge'
  },
  {
    image:
      Refrigerateur,
      Produits:'Refrigerateur'
  }

];
const Contenant = styled.div`
display:flex;
justify-content:space-around;
background-color : white;
width:100%;
height:100%;
align-items:center;
`

const Carouseldiv = () => {
    return(
        <Carousel  showStatus={false} infiniteLoop autoPlay showThumbs={false} width={'100%'}>
              {slides.map((slide,index)=>{
                return(
                <Contenant >
                  <h1>{slide.Produits}</h1>
                <img style={{display:'block',width:'20%',objectFit: 'contain'}} src={slide.image}/>
                </Contenant> )
              })}          
        </Carousel>

    );
}

export default Carouseldiv;