import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

const PDPAModal = (props) => {

    const show = useState(true);

    const onTrigger = () => {
        props.handleCallBack(false);
    };


    return (
        <>
            {show ? (
                
                <Modal show onHide={onTrigger} size="lg">

                <Modal.Header closeButton>
                    <Modal.Title>Personal Data Protection Policy</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <div>
                        <p className="strong">
                            The purpose of this document (“Data Protection Policy”) is to inform you of how Pharmline Marketing Pte Ltd (“Pharmline”) manages personal data which is subject to the Singapore Personal Data Protection Act (No. 26 of 2012) (“the Act”). Please take a moment to read this Data Protection Policy so that you know and understand the purposes for which we collect, use and disclose your Personal Data.
                        </p>
                        <p className="strong">
                            By entering into any agreements with us, interacting with us, submitting information to us, or enrolling or signing up for any products or services offered by us, you agree and consent to Pharmline, as well as our service providers and third parties appointed by us on your behalf (collectively, “us”, “we” or “our”) collecting, using and disclosing your Personal Data in the manner set forth in this Data Protection Policy.
                        </p>
                        <p>
                            This Data Protection Policy supplements but does not supersede nor replace any other consents which you may have previously provided to Pharmline in respect of your Personal Data, and your consents herein are additional to any rights which to Pharmline may have at law to collect, use or disclose your Personal Data.
                        </p>
                        <p>
                            Pharmline may from time to time update this Data Protection Policy to ensure that this Data Protection Policy is consistent with our future developments, industry trends and/or any changes in legal or regulatory requirements. Subject to your rights at law, you agree to be bound by the prevailing terms of this Data Protection Policy as updated from time to time and we may notify you of, whether by email, providing you with a hard copy, or otherwise uploading onto our website. Please check back regularly for updated information on the handling of your Personal Data.
                        </p>
                        <p>
                            This Data Protection Policy takes effect on 2 July 2014.
                        </p>

                        <p className="strong">1. Personal Data</p>
                        <p>In this Data Protection Policy, “Personal Data” refers to any data, whether true or false, about an individual who can be identified</p>

                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                     (a) from that data; or 
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                (b) from that data and other information to which we have or are likely to have access, including data in our records as may be updated from time to time. Examples of such Personal Data you may provide to us include (depending on the nature of your interaction with us) your name, age, NRIC, FIN or passport number, telephone number(s), mailing address, email address and any other information relating to any individuals which you have provided us in any forms you may have submitted to us, or via other forms of interaction with you.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>

                        <p className="strong">2. Collection of Personal Data</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                A. Generally, we collect Personal Data in the following ways:
                                     
                                     <ol type="a">
                                        <li>when you submit forms or applications to us;</li>
                                        <li>when you submit queries, requests or feedback to us;</li>
                                        <li>when you interact with our staff, which may include customer service officers, relationship managers and other representatives, e.g. via telephone calls (which may be recorded), letters, fax, face-to-face meetings and email;</li>
                                        <li>when your images are captured by us via CCTV cameras while you are within our premises, or via photographs or videos taken by us or our representatives when you attend events hosted by us;</li>
                                        <li>when you use any of our services, e.g. websites and apps including establishing any online accounts with us;</li>
                                        <li>when you are contacted by, and respond to, our staff and agents and other service providers;</li>
                                        <li>when you respond to our request for additional Personal Data;</li>
                                        <li>when you request that we contact you, or ask to be included in an email or other mailing list;</li>
                                        <li>when we seek or receive your Personal Data from business partners and third parties in connection with your relationship with us, e.g. where you have been referred by them;</li>
                                        <li>when you submit a job application; and</li>
                                        <li>when you submit your Personal Data to us for any other reasons.</li>
                                        
                                     </ol>
                                     
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                B. When you browse our website, we do not automatically collect Personal Data, including your email address unless you provide such information or login with your account credentials.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                C. If you provide us with any Personal Data relating to a third party (e.g. information of spouse, children, parents, and/or employees), by submitting such information to us, you represent to us that you have obtained the consent of that third party to you providing us with their Personal Data for the purposes stated in this Data Protection Policy.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                D. You should ensure that all Personal Data submitted to us is complete, accurate, true and correct. Failure on your part to do so may result in our inability to fulfil your requests and/or applications.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


                        <p className="strong">3. Our Website</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                     A. When you browse our website, you generally do so anonymously and we do not at our website automatically collect Personal Data, including your email address unless you provide such information.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                B. Our website may contain links to other sites that are operated by third parties with different privacy practices. We have no control over and do not take any responsibility for these third party websites and their personal data handling practices, and you are encouraged to review the personal data policies of websites you choose to visit which are linked from our website.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


                        <p className="strong">4. Purposes for the Collection, Use and Disclosure of Your Personal Data</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    A. Generally, Pharmline collects, uses and discloses your Personal Data for the following purposes:
                                    <ol type="a">
                                        <li>providing our products and services;</li>
                                        <li>responding to your queries, requests, complaints and feedback;</li>
                                        <li>managing our administrative and business operations and complying with internal policies and procedures;</li>
                                        <li>facilitating business asset transactions (which may extend to any mergers, acquisitions and debt or asset sales) involving Pharmline;</li>
                                        <li>verifying your identity;</li>
                                        <li>matching any Personal Data held which relates to you for any of the purposes listed herein;</li>
                                        <li>requesting feedback or participation in surveys, as well as conducting market research;</li>
                                        <li>preventing, detecting and investigating crime, including fraud and money-laundering, and analysing and managing commercial risks;</li>
                                        <li>maintaining the security of Pharmline premises (including but not limited to CCTV surveillance);</li>
                                        <li>managing ad hoc projects and initiatives;</li>
                                        <li>generating reports and analytics in relation to our products and services;</li>
                                        <li>conducting our due diligence;</li>
                                        <li>meeting or complying with any applicable laws, rules, regulations, codes of practice or guidelines issued by any legal or regulatory bodies or to assist in law enforcement and investigations by relevant authorities;</li>
                                        <li>legal purposes; and</li>
                                        <li>any other purposes which are reasonably related to the aforesaid.</li>
                                    </ol>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    B. In addition, Pharmline collects, uses and discloses your Personal Data for the following purposes depending on the nature of our relationship with you:
                                    <ol type="a">
                                        <li>If you are an individual customer of Pharmline: facilitating the provision of products and services which you have requested for and any other purposes which are reasonably related to the aforesaid;</li>
                                        <li>If you are a trading partner of Pharmline: facilitating the daily operation of trading services, updating your contact details and any other purposes which are reasonably related to the aforesaid;</li>
                                        <li>If you are an employee, officer or owner of an external service provider which has been engaged, outsourced or prospected by Pharmline: managing and evaluating project tenders, processing and payment of vendor invoices and any other purposes which are reasonably related to the aforesaid;</li>
                                        <li>If you submit an application to us as a candidate for an employment or representative position: conducting interviews, processing your application, providing or obtaining employee references and background screening, processing employment pass applications, visa applications and offer of employment, evaluating and assessing your suitability for the position applied for and any other purposes reasonably related to any of the above;</li>
                                        <li>If you are a visitor to Pharmline office: facilitating your visit to our premises, including verifying your identity, facilitating and organising training events and seminars held on our premises and any other purposes reasonably related to any of the above.</li>
                                    </ol>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    C. In addition, where permitted under the Act or where you have specifically consented to the same, Pharmline may also collect, use and disclose your Personal Data as follows:
                                    <ol type="a">
                                        <li>organising promotional and corporate events;</li>
                                        <li>sending newsletters;</li>
                                        <li>sending you details of products, services, special offers and rewards, either to our customers generally, or which we have identified may be of interest to you;</li>
                                        <li>providing services, products and benefits to you, including promotions, loyalty and reward programmes;</li>
                                        <li>administering contests and competitions;</li>
                                        <li>leads generation and management; and</li>
                                        <li>conducting market research, understanding and determining customer location, preferences and demographics for us to review, develop and improve our products, services and also develop special offers and marketing programmes.</li>
                                    </ol>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    D. If you have provided your Singapore telephone number(s) and have indicated that you consent to receiving marketing or promotional information via your Singapore telephone number(s) then from time to time, Pharmline may contact you using such Singapore telephone number(s) (including via voice calls, text, fax or other means) with information about our products and services (including discounts and special offers).
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    E. In relation to particular products or services or in your interactions with us, we may also have specifically notified you of other purposes for which we collect, use or disclose your Personal Data. If so, we will collect, use and disclose your Personal Data for these additional purposes as well, unless we have specifically notified you otherwise.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


                        <p className="strong">5. Disclosure of Personal Data</p>
                        <p>Your Personal Data held by us shall be kept confidential. However, in order to provide you with effective and continuous products and services, and for the purposes listed above (where applicable), your Personal Data may be disclosed to the following, whether located in Singapore or overseas:</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                     A. agents, contractors or third party service providers who provide operational services to Pharmline, such as courier services, telecommunications, information technology, payment, payroll, processing, training, market research, storage, archival or other services to Pharmline;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    B. any business partner, investor, assignee or transferee (actual or prospective) to facilitate business asset transactions (which may extend to any mergers, acquisitions and debt or asset sale) involving Pharmline;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    C. where we require payment from you, your banks, credit card companies and their respective service providers;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    D. our professional advisers such as financial advisors, auditors and lawyers;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    E. travel agencies in relation to facilitating overseas travel arrangements;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    F. foreign embassies in relation to visa applications;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    G. relevant government regulators, government ministries, statutory boards or authorities or law enforcement agencies to comply with any laws, rules, guidelines and regulations or schemes imposed by any governmental authority such as the Monetary Authority of Singapore, the Central Provident Fund Board, the Ministry of Manpower and the Ministry of Health;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    H. counterparties, billing organisations and their respective banks in relation to fund transfers, payments and letters of guarantees;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    I. companies and brokers providing insurance products and services;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    J. collection and repossession agencies in relation to the enforcement of payment obligations;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    K. any other party to whom disclosure of Personal Data is reasonably necessary for the purpose of managing, maintaining or terminating the relationship or providing you with our products and services;
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    L. external business, referral and charity partners in relation to our promotional events; and
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    M. any other party to whom you authorise us to disclose your Personal Data to.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


                        <p className="strong">6. Data Security</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                     A. Pharmline will take reasonable efforts to protect Personal Data in our possession or our control by making reasonable security arrangements to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks. However, we cannot completely guarantee the security of any Personal Data we may have collected from or about you, or that for example no harmful code will enter our website (for example, viruses, bugs, Trojan horses, spyware or adware). You should be aware of the risks associated with using websites.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    B. While we strive to protect your Personal Data, we cannot ensure the security of the information you transmit to us via the Internet, and we urge you to take every precaution to protect your Personal Data when you are on the Internet. We recommend that you change your passwords often, use a combination of letters and numbers, and ensure that you use a secure browser.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    C. If applicable, you undertake to keep your username and password secure and confidential and shall not disclose or permit it to be disclosed to any unauthorized person, and to inform us as soon as reasonable practicable if you know or suspect that someone else knows your username and password or believe the confidentiality of your username and password has been lost, stolen or compromised in any way or that actual or possible unauthorized transactions have taken place. We are not liable for any damages resulting from any security breaches, on unauthorized and/or fraudulent use of your username and password.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>

                        <p className="strong">7. Contacting us – Withdrawal of Consent, Access and Correction of your Personal Data</p>
                        <ListGroup as="ol">
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                     A. If you:
                                     <ol type="a">
                                        <li>have any questions or feedback relating to your Personal Data or our Personal Data Protection Policy;</li>
                                        <li>would like to withdraw your consent to any use of your Personal Data as set out in this Data Protection Policy; or</li>
                                        <li>would like to obtain access and make corrections to your Personal Data Records,
                                        please contact Pharmline as follows:</li>
                                        <ul>
                                            <li>Submit a <Link to="/contact" target="_blank" rel="noreferrer noopener">Contact Form</Link></li>
                                            <li>Call: +65 6286 0291</li>
                                            <li>Write in: </li>
                                        </ul>
                                     </ol>
                                     <p>Data Protection Officer</p>
                                     <p>605A Macpherson Road #03-03</p>
                                     <p>Citimac Industrial Complex</p>
                                     <p>Singapore 368240</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    B. If you withdraw your consent to any or all use of your Personal Data, depending on the nature of your request, Pharmline may not be in a position to continue to provide its products or services to you, administer any contractual relationship in place, may be considered a termination by you of any contractual relationship which you may have with Pharmline, and your being in breach of your contractual obligations or undertakings, and Pharmline’s legal rights and remedies in such event are expressly reserved.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    C. Please note that if your Personal Data has been provided to us by a third party, you should contact such party directly to make such queries, complaints, and access and correction requests to Pharmline on your behalf.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    D. As a general rule, Pharmline will upon the request of an individual, provide him as soon as reasonably possible with personal information about the individual that is in our possession and information about the ways in which the Personal Data has been or may have been used or disclosed within a year before the date of the request.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    E. Pharmline will also, where an individual has requested that it correct an error or omission in the Personal Data about the individual that is kept with Pharmline, correct such data as soon as practicable and send the corrected personal data to every organisation to which the personal data was sent before it had been corrected, unless that organisation does not need the corrected personal data for any legal or business purpose.
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    F. Pharmline may however choose not to provide individuals with access to or correct such information, in accordance with the exceptions under the PDPA. This would include cases where:
                                    <ol type="a">
                                        <li>Pharmline is satisfied on reasonable grounds that the correction should not be made;</li>
                                        <li>The request for access is frivolous or vexatious or the information requested is trivial;</li>
                                        <li>The personal information is related to a prosecution and all the proceedings related to the prosecution have not been completed;</li>
                                        <li>The Personal Data, if disclosed, would reveal confidential commercial information that could, in the opinion of a reasonable person, harm the competitive position of the organisation; and</li>
                                        <li>The Personal Data was collected, used or disclosed for the purposes of an investigation and associated proceedings and appeals have not been completed.</li>
                                    </ol>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    G. Pharmline may decide to impose a nominal charge upon the individual to cover the cost of verifying a request for information and locating, retrieving, reviewing and copying any material requested.
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


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

export default PDPAModal;
