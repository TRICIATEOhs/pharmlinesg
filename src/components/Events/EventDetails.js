import { Link, useParams } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { Calendar, Clock, GeoAlt, ArrowLeft } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import {React} from 'react';

import MainNavbar from '../MainNavbar.js';
import NoEventMatch from './NoEventMatch.js';
import pastEventsJson from "../../data/pastEvents.js";
import upcomingEventsJson from '../../data/upcomingEvents.js';


function EventDetails() {

    const params = useParams();
    const eventid = params.eventid;

    const pastEventObject = pastEventsJson.find((event) => event.urlName === eventid);
    const upcomingEventObject = upcomingEventsJson.find((event) => event.urlName === eventid);
    let eventObject = {};
    let invalidUrl = false;

    if(pastEventObject !== undefined) {
        eventObject = pastEventObject;
    } else if(upcomingEventObject !== undefined) {
        eventObject = upcomingEventObject;
    } else {
        invalidUrl = true;
    }

    let isProgrammeImage = false;
    if(eventObject.programmeImage !== '' && eventObject.programmeImage !== '-') {
        isProgrammeImage = true;
    }

    let isImageGallery = false;
    if (eventObject.imageGallery !== '' && eventObject.imageGallery !== '-') {
        isImageGallery = true;
    }

    const galleryList = eventObject.imageGallery && eventObject.imageGallery?.map( (image, idx) => {
        return(
            <Col>
                <div key={idx}>
                    <div className="gallery">
                         <a target="_blank" rel="noreferrer noopener" href={image}>
                         <img src={image} alt={eventObject.name}/>
                         </a>
                     </div>
                </div>
            </Col>

        );
    });
    
    return(
        <>
            <MainNavbar activeTab="/events"/>

            {
                invalidUrl? 

                    <NoEventMatch />

                :

                <>
                    <div className="page-title">
                        <div className="container side-title">
                            <div className="mb-4"><Link to="/events"><ArrowLeft size="16"/>Back</Link></div>
                            <h3>{eventObject.name}</h3>
                            <hr/>
                        </div>
                    </div>

                    <div className="container section eventDetails">
                        {
                            (eventObject.status === 'inactive')? 
                                <p><Badge bg="dark">Event has ended</Badge></p>
                            : 
                                <>
                                {
                                    (eventObject.openToPublicTag === 'true')? 
                                        <p><Badge bg="warning" text="dark">Only for doctors and specialists</Badge></p>
                                    : 
                                        <p><Badge bg="success">Open to public</Badge></p>
                                }
                                </>
                        }
                        
                        <div className="row g-4">
                            <div className="col-12 col-md-8">
                                <h5>About the event</h5>
                                
                                {(eventObject.details)?.map((detail, idx) => {
                                    return(
                                        <p key={idx}>{detail}</p>
                                    );
                                })}
                                
                                {
                                    isProgrammeImage? 
                                    <div className="imgLink">
                                        <img src={eventObject.programmeImage} alt={eventObject.name}/>
                                    </div>
                                    :
                                    ''
                                }

                            </div>


                            <div className="col-12 col-md-4">
                                <h5>Event details</h5>

                                <Table borderless>
                                    <tbody>
                                        <tr>
                                        <td>
                                            <span className="icon-circle-white"><Calendar size="16"/></span>
                                        </td>
                                        <td>
                                            <span className="medium">Date: </span> {eventObject.date}
                                        </td>
                                        </tr>

                                        <tr>
                                        <td>
                                            <span className="icon-circle-white"><Clock size="16"/></span>
                                        </td>
                                        <td>
                                            <span className="medium">Time: </span>{eventObject.time}
                                        </td>
                                        </tr>

                                        <tr>
                                        <td>
                                            <span className="icon-circle-white"><GeoAlt size="16"/></span>
                                        </td>
                                        <td>
                                            <span className="medium">Location: </span>{eventObject.location}
                                        </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    {
                        isImageGallery? 
                        (
                            <div className="container section">
                                <div className="row">
                                    <hr/>
                                    <div className="col mb-4 mt-4">
                                        <h5>View more images</h5>
                                    </div>
                                </div>


                                <Row xs={1} md={6} className="g-4">
                                    {galleryList}
                                </Row>

                                <div className="clearfix"></div>
                            </div>
                        )

                        :
                        ''
                    }
                </>
            }

        </>
    );
}

export default EventDetails;









