import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import { Telephone } from 'react-bootstrap-icons';
import { GeoAlt } from 'react-bootstrap-icons';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';

import MainNavbar from '../MainNavbar.js';
import JoinMembershipForm from './JoinMembershipForm.js';
import SubscribeNewsletterForm from './SubscribeNewsletterForm.js';
import GeneralEnquiriesForm from './GeneralEnquiriesForm.js';
import emailJsCredentials from "../../data/emailJsCredentials.js";

function ContactUs() {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const mobileClass = isMobile ? 'contact-details-mobile' : 'contact-details';

    const [enquiry, setEnquiry] = useState("");    
    function handleSelect(event) {
        setEnquiry(event.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        //emailjs.sendForm('service_weaqu1a','template_uzn9nhe',e.target,'f6nkrPgs32FIMDuHy');
        emailjs.sendForm(emailJsCredentials.service_id, emailJsCredentials.template_id,e.target, emailJsCredentials.public_key);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <MainNavbar activeTab="/contact"/>
            <div className="container section contact">
                <div className="row">
                    <div className="col-12 col-md-6 side-title">
                        <h3>Contact us</h3>
                        <hr/>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col contact-form">
                        <Form onSubmit={sendEmail}>
                            <FloatingLabel controlId="floatingSelect" label="Subject">
                                <Form.Select aria-label="Floating label select" onChange={handleSelect} name="subjectInput">
                                    <option value="General enquiries">General enquiries</option>
                                    <option value="Subscribe to newsletters">Subscribe to newsletters</option>
                                    <option value="Join membership">Join membership</option>
                                </Form.Select>
                            </FloatingLabel>

                            {
                                (enquiry === "Subscribe to newsletters") ? 
                                (<SubscribeNewsletterForm/>) :
                                (enquiry === "Join membership") ? 
                                (<JoinMembershipForm/>) :
                                (<GeneralEnquiriesForm/>)
                            }
                            

                            <Button variant="primary raise" type="submit" onClick={handleShow}>Submit</Button>

                        </Form>

                    </div>


                    <div className={'col-12 col-md-6 ' + mobileClass}>
                        <div className="row">
                            <p className="p-title">Call us</p>
                            <p>
                                Call or WhatsApp us during operating hours every weekday from 8.30AM to 5.30PM (except weekends and public holidays).
                            </p>
                            <p className="red-txt"><span className="icon-circle"><Telephone size="16"/></span> +65 6286 0291</p>
                        </div>

                        <div className="row mt-5">
                            <p className="p-title">Office location</p>
                            <p>
                                The office is a private workspace and is not open for public visit.
                            </p>
                            <p className="red-txt"><span className="icon-circle"><GeoAlt size="16"/></span> 705 Sims Drive #02-07, Shun Li Industrial Complex, Singapore 387384</p>
                            <iframe title="mapFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7626004532744!2d103.87366391062652!3d1.3180897986638602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e5c5204535%3A0x8228831cc4ccfc1c!2sShun%20Li%20Industrial%20Complex!5e0!3m2!1sen!2sus!4v1698369111822!5m2!1sen!2sus" width="600" height="300" loading="lazy"></iframe>
                        </div>
                    </div>



                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Form submitted!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thank you for contacting us; we will respond as soon as possible!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}

export default ContactUs;