import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import homeData from '../../data/home.js';

function HomeBanner() {

    return(
        <>

            <div className="container section">
                <div className="row flex-lg-row-reverse align-items-center">
                    <div className="col-sm-12 col-lg-6">
                        <img className="banner-img" src={homeData[0].banner} alt="banner"/>
                    </div>

                    <div className="col-sm-12 col-lg-6 py-5">
                        <h1>Delivering Health, One Prescription  At A Time</h1>
                        <p>Driven by our mission to improve lives through reliable pharmaceutical distribution, we pride ourselves on our extensive product portfolio, streamlined logistics, and unwavering dedication to regulatory compliance. Our experienced team ensures that every product reaching you is <span className="highlight">authentic</span>, <span className="highlight">safe</span>, and <span className="highlight">prompt</span>.</p>
                        <p><img className="mini-icon" src={homeData[0].licenseBadge} alt="PharmLine logo"/>Licensed distributor in Singapore</p>

                        <Link
                            to={{
                                pathname: `/contact`
                            }}
                            >
                                <Button variant="primary raise">Get in touch with us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBanner;