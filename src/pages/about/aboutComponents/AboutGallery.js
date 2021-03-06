import './AboutGalleryStyles.css';
import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

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
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/cottage-photos/cottage11.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/cottage-photos/cottage8.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven15.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven14.jpg"} responsive/>
           </Carousel.Item>
         </Carousel>
      </div>
    );
  }
}

export default AboutGallery;
