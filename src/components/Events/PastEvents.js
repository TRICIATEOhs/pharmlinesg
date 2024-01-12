import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import pastEventsJson from "../../data/pastEvents.js";

function PastEvents() {

    const eventList = pastEventsJson && pastEventsJson.map( event => {
        return(

            <div key={event.id}>
                <Col>
                    <Link
                        to={{
                            pathname: `/events/${event.urlName}`
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
                    <Row xs={2} md={3} lg={4} className="g-4">
                        {eventList}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default PastEvents;