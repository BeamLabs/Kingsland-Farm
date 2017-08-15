import React, { Component } from 'react';
import {Accordion, Panel, Image} from 'react-bootstrap';
import './AccordionComponent.css';

class PropertiesAccordion extends Component {
  render() {
    return (
        <Accordion className="accordion-container">
            <Panel header="Lake Joy House" eventKey={1}>
                <Image src="/images/cottage-photos/cottage11.jpg" alt="100x100" className="property-image"/>
                <p className="accordion-info">
                    The Lake Joy House is the main house on the property. It is an expansive farmhouse that sits atop a
                    hill overlooking the private pond, offering a gorgeous view no matter what. It is a short distance
                    from The Cottage, making it ideal to rent in conjunction for special events. There is plenty of
                    dining space and outdoor entertainment space as well. Just a short walk to the water, you can enjoy
                    a morning of fishing off the dock or cool off in the afternoon with a swim. At night, you will
                    experience breathtaking stargazing views while sitting by the flagstone patio and outdoor fireplace.
                </p>
                <br/>
                <span className="reservation-header">For Reservations:</span>
                <br/>
                <p>Please visit: <a href="https://www.vrbo.com/776510">https://www.vrbo.com/776510</a></p>
            </Panel>
            <Panel header="The Cottage" eventKey={2}>
                <Image src="/images/cottage-photos/cottage11.jpg" alt="100x100"  className="property-image"/>
                <p className="accordion-info">
                    The Cottage is a quiet country home on the most beautiful private land in Georgia. Awaiting your
                    arrival is a 3 bedroom/2 bathroom space with plenty of areas for entertaining. Spend your evenings
                    by a cozy outdoor fire pit, and your days swimming off the dock or enjoying the skeet shooting range.
                    You’ll have endless ways to escape, while sleeping in absolute comfort each night.
                </p>
                <br/>
                <span className="reservation-header">For Reservations:</span>
                <br/>
                <p>Please visit: <a href="https://www.vrbo.com/776510">https://www.vrbo.com/776510</a></p>
            </Panel>
            <Panel header="The Stables" eventKey={3}>
                <Image src="/images/cottage-photos/cottage10.jpg" alt="100x100"  className="property-image"/>
                <p className="accordion-info">
                    Need to get more information about the stables from Monica to properly describe them.
                </p>
                <br/>
                <span className="reservation-header">For Reservations:</span>
                <br/>
                <p>Please visit: <a href="https://www.vrbo.com/776510">https://www.vrbo.com/776510</a></p>
            </Panel>
        </Accordion>
    );
  }
}

export default PropertiesAccordion;
