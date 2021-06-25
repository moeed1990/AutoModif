import React from 'react';
import {Carousel} from "react-bootstrap";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`width:100%;
  height:80vh;
  width:100%
  object-fit: contain;
  margin-top:0px;
  top:-100px;
  z-index:-3;
  padding:0rem;
  margin:0rem;
  display:flex;
  `

function HeroSection(props){


    return (
        <div>
            <StyledCarousel fade className='w-100'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/al1.jfif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/al2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-0 p-0"
      src="/images/al4.jfif"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</StyledCarousel>
        </div>
    );
}

export default HeroSection;