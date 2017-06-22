import React from 'react'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class FormComponent extends React.Component {
    render() {
        return (
            <form className="contact-form" method="POST" action="http://formspree.io/jacob@beamlabs.net">
                <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl type="text" placeholder="Enter your first name" name="firstName" bsSize="lg" required/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl type="text" placeholder="Enter your last name" name="lastName" bsSize="lg" required/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" placeholder="Enter your email" name="_replyto" bsSize="lg" required/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Phone Number</ControlLabel>
                    <FormControl type="tel" placeholder="Enter your phone number" name="phoneNumber" bsSize="lg"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Inquiry / Message</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Enter a message" name="message" bsSize="lg" className="message-textarea" style={{height: '200px'}} required/>
                </FormGroup>
                <button type="submit" className="contact-submit-button">Submit</button>
            </form>
        );
    }
}

export default FormComponent;
