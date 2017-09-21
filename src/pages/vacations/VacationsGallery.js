import './VacationsGalleryStyles.css';
import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

class VacationsGallery extends Component {
  render() {
    const imageWidth = 1000;
    const imageHeight = 500;
    const placeholderURL = "http://via.placeholder.com/" + imageWidth + "x" + imageHeight;
    const altString = "" + imageWidth + "x" + imageHeight;
    
    return (
      <div className="about-image-carousel">
        <Carousel>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven1.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven2.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven3.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven4.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven5.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven6.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven7.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven8.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven9.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven10.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven11.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven12.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven13.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven14.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven15.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven16.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven17.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven18.jpg"} responsive/>
           </Carousel.Item>
           <Carousel.Item>
             <Image width={imageWidth} height={imageHeight} alt={altString} src={"/images/summerhaven-photos/summerhaven19.jpg"} responsive/>
           </Carousel.Item>
         </Carousel>
      </div>
    );
  }
}

export default VacationsGallery;
