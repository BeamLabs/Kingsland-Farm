import React, { Component } from 'react';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component'; 

class TestimonialSection extends Component {
  render() {
    return (
        <Grid>
            <div className="testimonial-container">
                <Row>
                    <Col md={12} sm={12} xs={12} className="testimonial-header">
                        <h2>Testimonials</h2> 
                    </Col>
                </Row>
                <Carousel className="testimonial-carousel" pauseOnHover={false} indicators={false} controls={false}>
                    <Carousel.Item>
                        <div className="testimonial-div">
                            <p className="testimonial-quote">"Loved our stay! She was able to commonindate us for a baby shower and it was beyond perfect! Plenty of room and such a lovely property! Also, the sweetest host ever! Thank you for allowing us to share your beautiful home!"</p>
                            <p>- Kristy G.</p>
                            <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-div">
                            <p className="testimonial-quote">"Absolutely gorgeous property and wonderful accommodations. Monica took care of every detail. Pristine and spotless. If you enjoy hearing wildlife at night and stargazing around the bonfire with modern conveniences just steps away, you will love this home."</p>
                            <p>- Vicki B.</p>
                            <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-div">
                            <p className="testimonial-quote">"The house we stayed in for the weekend was absolutely wonderful. Very clean and well maintained."</p> 
                            <p>- Mike Howell</p>
                            <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-div">
                            <p className="testimonial-quote">"All the amenties that were offered made my families stay just that much better"</p>
                            <p>- Johnny Baine</p>
                            <StarRatingComponent starCount={5} name={'testimonial-stars'} value={4} editing={false}/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial-div">
                            <p className="testimonial-quote">"I would and have recommended this to all my friends if you are looking for a fun adventure!"</p>
                            <p>- Justin Sanders</p>
                            <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <hr/>
            </div>
        </Grid>
    );
  }
}

export default TestimonialSection;
