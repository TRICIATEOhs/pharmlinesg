import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MainNavbar from '../MainNavbar.js';
import aboutMembersJson from "../../data/aboutMembers.js";

import teamphoto from '../../images/teamphoto.jpg';

function  AboutUs () {

    const memberList = aboutMembersJson && aboutMembersJson.map((member) =>{
        let imgAlt = member.name + "-" + member.position;

        return(
            <div key={member.id}>
                <Col>
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src={member.image} className="profile-thumb" alt={imgAlt}/>
                        </div>
                        <div className="profile-info">
                            <p className="profile-name">{member.name}</p>
                            <p className="profile-position">{member.position}</p>
                        </div>
                    </div>
                </Col>
            </div>
        );

    });


    return(
        <>
            <MainNavbar activeTab="/about"/>
            <div className="container section about">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 mini-intro">
                        <p>About us.</p>
                        <p>Our team.</p>
                        <p>Our values.</p>
                    </div>

                    <div className="col-lg-10 col-sm-12 mt-4 side-title">
                        <h3>About us</h3>
                        <hr/>
                        <p>At the heart of our mission is your enhanced quality of life.</p>
                        <p>Founded in 1977, we stand as a stalwart in the pharmaceutical landscape, dedicated to shaping healthier lives through comprehensive distribution solutions. With over four decades of unwavering commitment, we've evolved into a trusted name in pharmaceutical distribution.</p>
                        <p>With a focus on pharmaceutical and healthcare excellence, we specialize in distributing top-tier products to hospitals, clinics, specialists, general practitioners, pharmacies, and medical halls.</p>
                        <p>Our team is unwavering in their commitment. Bound by camaraderie and a shared enthusiasm, we approach our work with joy. This passion fuels our dedicated sales and operations staff, ensuring a service of unparalleled quality.</p>
                        
                    </div>
                </div>
            </div>

            <div className="section full-width">
                <img src={teamphoto} className="" alt={teamphoto}/>
            </div>


            <div className="container section about middle-title">
                <div className="row">
                    <div className="col">
                        <h3>The managing team</h3>
                        <hr/>
                        <p>Meet our dynamic team – driven by passion, united by purpose, and dedicated to delivering excellence in healthcare distribution.</p>
                    </div>
                </div>

                <Row xs={2} md={4} className="g-4">
                    {memberList}
                </Row>

            </div>
        </>
    );
}

export default AboutUs;