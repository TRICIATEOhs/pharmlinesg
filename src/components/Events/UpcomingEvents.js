import { Link } from "react-router-dom";
import { Calendar, Clock, GeoAlt, Calendar2Plus } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import upcomingEvents from '../../data/upcomingEvents.js';

function UpcomingEvents() {

    var eventDetails = upcomingEvents[0].details;
    var strArrayDetails = "";
    if (
        typeof eventDetails != "undefined" &&
        eventDetails != null &&
        eventDetails.length != null &&
        eventDetails.length > 0
    )
    {
        var i;
        for(i = 0; i <eventDetails.length; i++) {
            if (i === (eventDetails.length-1)) {
                strArrayDetails += eventDetails[i];
            } else {
                strArrayDetails += eventDetails[i] + "||";
            }
            
        }
    }

    var imageGallery = upcomingEvents[0].imageGallery;
    var strArrayGallery = "";

    if (
        typeof imageGallery != "undefined" &&
        imageGallery != null &&
        imageGallery.length != null &&
        imageGallery.length > 0
    )
    {
        var u;
        for(u = 0; u <imageGallery.length; u++) {
            if (u === (imageGallery.length-1)) {
                strArrayGallery += imageGallery[u];
            } else {
                strArrayGallery += imageGallery[u] + "||";
            }
            
        }
    }


    return(
        <>

            {(!!(upcomingEvents) && upcomingEvents[0].status === "active")? 
            (
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-sm-12 col-lg-6 event-card">
                    <Link
                        to={{
                            pathname: `/events/${upcomingEvents[0].urlName}`
                        }}
                        state={{
                            id: `${upcomingEvents[0].id}`,
                            status: `${upcomingEvents[0].status}`,
                            urlName: `${upcomingEvents[0].urlName}`,
                            name: `${upcomingEvents[0].name}`,
                            openToPublicTag: `${upcomingEvents[0].openToPublicTag}`,
                            location: `${upcomingEvents[0].location}`,
                            date: `${upcomingEvents[0].date}`,
                            time: `${upcomingEvents[0].time}`,
                            coverImage: `${upcomingEvents[0].coverImage}`,
                            programmeImage: `${upcomingEvents[0].programmeImage}`,
                            details: `${strArrayDetails}`,
                            imageGallery: `${strArrayGallery}`
                        }}
                        >
                            <img src={upcomingEvents[0].coverImage} className="d-block mx-lg-auto img-fluid" alt={upcomingEvents[0].name}loading="lazy"/>
                        </Link>

                    </div>
                    <div className="col-sm-12 col-lg-6">
                        {
                            (upcomingEvents[0].openToPublicTag === 'true')? 
                                <p><Badge bg="warning" text="dark">Only for doctors and specialists</Badge></p>
                            : 
                                <p><Badge bg="success">Open to public</Badge></p>
                        }
                        <h3 className="fw-bold lh-1">{upcomingEvents[0].name}</h3>
                        <p>{upcomingEvents[0].snippet}</p>
                        <p><span className="icon-circle-white"><Calendar size="16"/></span><span className="medium">Date: </span> {upcomingEvents[0].date}</p>
                        <p><span className="icon-circle-white"><Clock size="16"/></span><span className="medium">Time: </span>{upcomingEvents[0].time}</p>
                        <p><span className="icon-circle-white"><GeoAlt size="16"/></span><span className="medium">Location: </span>{upcomingEvents[0].location}</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link
                            to={{
                                pathname: `/events/${upcomingEvents[0].urlName}`
                            }}
                            state={{
                                id: `${upcomingEvents[0].id}`,
                                status: `${upcomingEvents[0].status}`,
                                urlName: `${upcomingEvents[0].urlName}`,
                                name: `${upcomingEvents[0].name}`,
                                openToPublicTag: `${upcomingEvents[0].openToPublicTag}`,
                                location: `${upcomingEvents[0].location}`,
                                date: `${upcomingEvents[0].date}`,
                                time: `${upcomingEvents[0].time}`,
                                coverImage: `${upcomingEvents[0].coverImage}`,
                                programmeImage: `${upcomingEvents[0].programmeImage}`,
                                details: `${strArrayDetails}`,
                                imageGallery: `${strArrayGallery}`
                            }}
                            >
                                <Button variant="primary raise">More details</Button>
                            </Link>
                        </div>

                    </div>
                </div>
            )
        
            :

            <Alert variant="light">
                <p><span className="icon-circle"><Calendar2Plus size="16"/></span>There are no upcoming events.<Link to="/contact" target="_blank" rel="noreferrer noopener"> Subscribe to our newsletter</Link> to be the first to know about our future events and special offers!</p>
            </Alert>
        
        }


        </>
    );
}

export default UpcomingEvents;