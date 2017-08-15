import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Events.css';

class Events extends Component {
  render() {
    return (
      <Grid className="events-page">
        <Row>
          <Col md={12} sm={12} xs={12} className="text-content">
            <h1 className="events-header">Events</h1>
            <p className="events-paragraph-content">Every experience begins with a vision. The only question we have for you is what’s the occasion? Kingsland
              Farm is the perfect venue for special events including weddings, family reunions, and weekend getaways.</p>

            <h3>Weddings:</h3>
            <p className="events-paragraph-content">You can see it now, your perfect wedding day. Surrounded by loving friends and family, as a sweet Georgia
              breeze sweeps through the air. By choosing Kingsland Farm as your wedding venue destination, you’re choosing
              an all-encompassing experience. The land speaks for itself, leaving you fewer details to stress over. Check
              out our list of recommended vendors and partners below!</p>

            <h3>Family Reunions:</h3>
            <p className="events-paragraph-content">It’s time to get the family together again, but it’s so tricky to find a destination that has something
              for everyone. Worry no more! Kingsland Farm has the best of both worlds when it comes to recreation and
              relaxation. There are plenty of activities, such as skeet shooting, horseback riding or water activities
              for the younger crowd. If you’d rather take it slow, relax by the lake or in one of the many porch swings.
              There are plenty of sleeping spaces, and a large kitchen designed to feed a crowd. It’s sure to be a memorable
              escape for the whole family.
            </p>

            <h3>Frequently Asked Questions (FAQ):</h3>
            <p>Is the venue handicap accessible?</p>
            <p>Are pets allowed at the venue?</p>
            <p>other questions and general event venue information goes here.</p>

            <h3>Recommended Vendors and Partners</h3>
            <p>Local photographers, caterers, etc go here.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Events;
