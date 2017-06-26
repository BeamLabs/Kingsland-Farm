import React, { Component } from 'react';
import {Accordion, Panel, Image} from 'react-bootstrap';

class PropertiesAccordion extends Component {
  render() {
    return (
        <Accordion className="accordion-container">
            <Panel header="Lake Joy House" eventKey={1}>
                <Image src="http://via.placeholder.com/200x200" alt="100x100" className="property-image"/>
                <p className="accordion-info">Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed. </p>
                <br/>
                <p><span style={{fontWeight: 'bold'}}>For Reservations:</span>
                <br/>
                Please visit: <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></p>
            </Panel>
            <Panel header="The Cottage" eventKey={2}>
                <Image src="http://via.placeholder.com/200x200" alt="100x100"  className="property-image"/>
                <p className="accordion-info">Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed. </p>
                <br/>
                <p><span style={{fontWeight: 'bold'}}>For Reservations:</span>
                <br/>
                Please visit: <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></p>
            </Panel>
            <Panel header="The Stables" eventKey={3}>
                <Image src="http://via.placeholder.com/200x200" alt="100x100"  className="property-image"/>
                <p className="accordion-info">Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed. </p>
                <br/>
                <p><span style={{fontWeight: 'bold'}}>For Reservations:</span>
                <br/>
                Please visit: <a href="http://vrbo.com/12345">http://vrbo.com/12345</a></p>
            </Panel>
        </Accordion>
    );
  }
}

export default PropertiesAccordion;
