import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GeneralEnquiriesForm() {
    return (
        <>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                    controlId="nameinput"
                    label="Name"
                    className="mb-3">
                        <Form.Control type="input" name="nameInput" placeholder="Your name" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                    controlId="contactinput"
                    label="Contact number"
                    className="mb-3">
                        <Form.Control type="input" name="contactInput" placeholder="Your contact" />
                    </FloatingLabel>
                </Col>
            </Row>

            <FloatingLabel
            controlId="emailinput"
            label="Email address"
            className="mb-3">
                <Form.Control type="email" name="emailInput" placeholder="name@example.com" />
            </FloatingLabel>


            <FloatingLabel controlId="commentsinput" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                name="commentsInput"
                />
            </FloatingLabel>

        </>
    );
}

export default GeneralEnquiriesForm;