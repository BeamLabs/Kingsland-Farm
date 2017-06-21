import React, { Component } from 'react';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component'; 

class TestimonialSection extends Component {
  render() {
    return (
        <Grid>
            <div className="testimonial-container">
                <Row>
                    <Col md={12} xs={12} className="testimonial-header">
                        <h2>Testimonials</h2> 
                    </Col>
                </Row>
                    <Carousel className="testimonial-carousel" pauseOnHover={false} indicators={false} controls={false}>
                        <Carousel.Item>
                            <div className="testimonial-div">
                                <p className="testimonial-quote">"I had an amazing exprience with my family at Kingsland Farm with my Family."</p>
                                <p>- John Smith</p>
                                <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-div">
                                <p className="testimonial-quote">"The staff was very friendly and helpful with finding the right place to have a fun a vacation!"</p>
                                <p>- Jamie Stone</p>
                                <StarRatingComponent starCount={5} name={'testimonial-stars'} value={4} editing={false}/>
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
                                <p>- Johnny Bravo</p>
                                <StarRatingComponent starCount={5} name={'testimonial-stars'} value={4} editing={false}/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-div">
                                <p className="testimonial-quote">"I would and have recommended this to all my friends if you are looking for a fun adventure!"</p>
                                <p>- Seymour Butts</p>
                                <StarRatingComponent starCount={5} name={'testimonial-stars'} value={5} editing={false}/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
            </div>
        </Grid>
    );
  }
}

export default TestimonialSection;
