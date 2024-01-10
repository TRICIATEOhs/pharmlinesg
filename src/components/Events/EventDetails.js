import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { Calendar, Clock, GeoAlt, ArrowLeft } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import MainNavbar from '../MainNavbar.js';


function EventDetails() {

    const stateLocation = useLocation();
    const status = stateLocation.state.status;
    const name = stateLocation.state.name;
    const openToPublicTag = stateLocation.state.openToPublicTag;
    const location = stateLocation.state.location;
    const date = stateLocation.state.date;
    const time = stateLocation.state.time;
    const programmeImage = stateLocation.state.programmeImage;
    let isProgrammeImage = false;
    if(programmeImage !== '' && programmeImage !== '-') {
        isProgrammeImage = true;
    }
    const imageGallery = stateLocation.state.imageGallery;
    let arrImageGallery = [];
    let isImageGallery = false;
    if (imageGallery !== '') {
        arrImageGallery = imageGallery.split('||');
        isImageGallery = true;
    }
    console.log(arrImageGallery);
    const eventDetails = stateLocation.state.details;
    let arrEventDetails = [];
    if (eventDetails !== '') {
        arrEventDetails = eventDetails.split('||');
    }


    const galleryList = arrImageGallery && arrImageGallery.map( (image, idx) => {
        return(
            <Col>
                <div key={idx}>
                    <div className="gallery">
                         <a target="_blank" rel="noreferrer noopener" href={image}>
                         <img src={image} alt={name}/>
                         </a>
                     </div>
                </div>
            </Col>

        );
    });


    return(
        <>
            <MainNavbar activeTab="/events"/>

            <div className="page-title">
                <div className="container side-title">
                    <div className="mb-4"><Link to="/events"><ArrowLeft size="16"/>Back</Link></div>
                    <h3>{name}</h3>
                    <hr/>
                </div>
            </div>

            <div className="container section eventDetails">
                {
                    (status === 'inactive')? 
                        <p><Badge bg="dark">Event has ended</Badge></p>
                    : 
                        <>
                        {
                            (openToPublicTag === 'true')? 
                                <p><Badge bg="warning" text="dark">Only for doctors and specialists</Badge></p>
                            : 
                                <p><Badge bg="success">Open to public</Badge></p>
                        }
                        </>
                }
                
                <div className="row g-4">
                    <div className="col-12 col-md-8">
                        <h5>About the event</h5>
                        
                        {arrEventDetails.map((detail, idx) => {
                            return(<p key={idx}>{detail}</p>);
                        })}
                        
                        {
                            isProgrammeImage? 
                            <div className="imgLink">
                                <img src={programmeImage} alt={name}/>
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
                                    <span className="medium">Date: </span> {date}
                                </td>
                                </tr>

                                <tr>
                                <td>
                                    <span className="icon-circle-white"><Clock size="16"/></span>
                                </td>
                                <td>
                                    <span className="medium">Time: </span>{time}
                                </td>
                                </tr>

                                <tr>
                                <td>
                                    <span className="icon-circle-white"><GeoAlt size="16"/></span>
                                </td>
                                <td>
                                    <span className="medium">Location: </span>{location}
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            {
                isImageGallery? 
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
                :
                ''
            }
        </>
    );
}

export default EventDetails;









