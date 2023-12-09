import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SubscribeNewsletterForm() {
    return (
        <>
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
                <Form.Control type="email" placeholder="name@example.com" name="emailInput"/>
            </FloatingLabel>

        </>
    );
}

export default SubscribeNewsletterForm;