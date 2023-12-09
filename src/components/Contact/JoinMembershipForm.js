import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { useState } from 'react';

import PDPAModal from './PDPAModal.js';

function JoinMembershipForm() {

    const [show, setShow] = useState(false);

    /*This is to close the modal and reset the value*/
    function callBack (childData) {
        setShow(false);
    }

    const dispalyPDPAModal = (message) => {
        setShow(true);
    }
    

    return (
        <>
            <Form.Group className="mb-3" controlId="membershipinput">
                <Form.Check
                    inline
                    type="checkbox"
                    name="prospanInput"
                    label="Prospan"
                    
                />
                <Form.Check
                    inline
                    type="checkbox"
                    name="viartrilInput"
                    label="Viartril-S"
                />
            </Form.Group>

            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                    controlId="nameinput"
                    label="Name"
                    className="mb-3">
                        <Form.Control type="input" placeholder="Your name" name="nameInput" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                    controlId="contactinput"
                    label="Contact number"
                    className="mb-3">
                        <Form.Control type="input" placeholder="Your contact" name="contactInput" />
                    </FloatingLabel>
                </Col>
            </Row>

            <FloatingLabel
            controlId="emailinput"
            label="Email address"
            className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" name="emailInput" />
            </FloatingLabel>

            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                    controlId="blockinput"
                    label="House / Block number"
                    className="mb-3">
                        <Form.Control type="input" placeholder="House / Block number" name="blockInput" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                    controlId="streetinput"
                    label="Street"
                    className="mb-3">
                        <Form.Control type="input" placeholder="Street" name="streetInput"/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                    controlId="unitinput"
                    label="Unit number"
                    className="mb-3">
                        <Form.Control type="input" placeholder="Unit number" name="unitInput"/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                    controlId="postalinput"
                    label="Postcal Code"
                    className="mb-3">
                        <Form.Control type="input" placeholder="Postal Code" name="postalInput"/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="declarationinput">
                <Form.Label>Please read this declaration</Form.Label>
                <Row className="g-2">
                    <Col md>
                        <label
                            className="form-check-label"
                            htmlFor="declaration"
                            name="declarationInput"
                        >
                        By submitting this form, I agree that I have read the <Link href={() => false} onClick={() => dispalyPDPAModal()}>Personal Data Protection Policy</Link> and consent to PHARMLINE, as well as PHARMLINE’s third party service providers and agents, collecting, using and disclosing my Personal Data in accordance with PHARMLINE’s Personal Data Protection Policy for the purpose of sending me marketing, advertising and promotional information about products and services that PHARMLINE may be offering, and which PHARMLINE believes may be of interest or benefit to me, by way of postal mail and/or electronic transmission to my email address.
                        </label>
                    </Col>
                </Row>
            </Form.Group>

            <div>
                {show ? (
                    <PDPAModal handleCallBack={callBack}/>
                ) : (
                    ""
                )}
            </div>

        </>
    );
}

export default JoinMembershipForm;