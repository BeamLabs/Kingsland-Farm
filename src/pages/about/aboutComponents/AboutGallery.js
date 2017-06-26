import './AboutGalleryStyles.css';
import React, { Component } from 'react';
import {Grid, Row, Col, Carousel, Image} from 'react-bootstrap';

class AboutGallery extends Component {
  render() {
    const imageWidth = 1000;
    const imageHeight = 500;
    const placeholderURL = "http://via.placeholder.com/" + imageWidth + "x" + imageHeight;
    const altString = "" + imageWidth + "x" + imageHeight;
    
    return (
      <div className="about-image-carousel">
        <Carousel>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={placeholderURL} responsive/>
             <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={placeholderURL} responsive/>
             <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={placeholderURL} responsive/>
             <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
      </div>
    );
  }
}

export default AboutGallery;
