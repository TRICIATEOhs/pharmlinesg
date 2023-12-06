import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

const ItemModal = (props) => {

    const show = useState(true);

    const onTrigger = () => {
        props.handleCallBack(false);
    };

    const name = props.name;
    const image = props.image;
    const description = props.description;
    const packSize = props.packSize;
    const productOf = props.productOf;
    const exclusiveAvailability = props.exclusiveAvailability;
    const ingredients = props.ingredients;
    const dosage = props.dosageInstructions;

    return (
        <>
            {show ? (
                
                <Modal show onHide={onTrigger} className="itemModal">

                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div className="modalImage">
                        <img src={image} alt=""/>
                    </div>

                    <div className="modalInfo">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>About the product</Accordion.Header>
                                <Accordion.Body>
                                    <p>{description}</p>
                                    <p><span className="medium">Pack size</span>: {packSize}</p>
                                    <p><span className="medium">Product of</span>: {productOf}</p>
                                    {exclusiveAvailability ? (
                                        <p><span className="highlight">Only available in clinics and specialist centres (or by prescription only)</span></p>
                                    ) : (
                                        ""
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>

                            {((ingredients !== "-") && (ingredients !== "")) ? (
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Product ingredients</Accordion.Header>
                                    <Accordion.Body>
                                    <p>{ingredients}</p>
                                    </Accordion.Body>
                                </Accordion.Item>    
                            ) : (
                                ""
                            )}

                            {((dosage !== "-") && (dosage !== "")) ? (
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Dosage instructions</Accordion.Header>
                                    <Accordion.Body>
                                    <p>{dosage}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ) : (
                                ""
                            )}


                        </Accordion>
                    </div>


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={onTrigger}>Close</Button>
                </Modal.Footer>

                </Modal>

            ) : (
                ""
            )}

        </>

    );
}

export default ItemModal;
