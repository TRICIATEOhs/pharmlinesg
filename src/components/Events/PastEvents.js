import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import pastEventsJson from "../../data/pastEvents.json";

function PastEvents() {

    const eventList = pastEventsJson && pastEventsJson.map( event => {

        var eventDetails = event.details;
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

        var imageGallery = event.imageGallery;
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

            <div key={event.id}>
                <Col>
                    <Link
                    to={{
                        pathname: `/events/${event.urlName}`
                    }}
                    state={{
                        id: `${event.id}`,
                        status: `${event.status}`,
                        urlName: `${event.urlName}`,
                        name: `${event.name}`,
                        openToPublicTag: `${event.openToPublicTag}`,
                        location: `${event.location}`,
                        date: `${event.date}`,
                        time: `${event.time}`,
                        coverImage: `${event.coverImage}`,
                        programmeImage: `${event.programmeImage}`,
                        details: `${strArrayDetails}`,
                        imageGallery: `${strArrayGallery}`,
                    }}
                    >
                        <div className="card">
                            <img src={event.coverImage} className="card-img" alt={event.name}/>
                            <div className="card-body">
                                <span className="copyright">{event.date}</span>
                                <span className="card-title medium">{event.name}</span>
                            </div>
                        </div>
                    </Link>
                </Col>
            </div>
        );
    });

    return(
        <>
            <div className="row past-events event-card">
                <div className="col side-title">
                    <h4>Past events</h4>
                    <hr/>
                    <Row xs={1} md={4} className="g-4">
                        {eventList}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default PastEvents;