import viartrils from '../../images/products/viartril.jpg';
import prospan from '../../images/products/prospan.jpg';

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const viartriallink = "https://www.facebook.com/viartrilsingapore?_rdc=1&_rdr";
const prospanlink = "https://www.facebook.com/prospansingapore?_rdc=1&_rdr";

function HomeMember() {
    return(
        <>
            <div className="container section member middle-title">
                <div className="row">
                    <div className="col">
                        <h3>Be our member</h3>
                        <hr/>
                        <p className="description">Become a member with us to access latest product information, special offers, complimentary delivery, and exciting free gifts with your purchases.  <Link to="/contact" target="_blank" rel="noreferrer noopener">Join us today</Link> and elevate your healthcare journey!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card">
                            <img src={viartrils} alt="Viartril-s"/>
                            <div className="secondarybg">
                                <h5>Empower joint health with <span className="highlight">Viartril-S</span></h5>
                                <p>This premium glucosamine supplement supports cartilage repair and eases joint discomfort. Prioritize joint well-being with Viartril-S – your partner in motion.</p>
                                <Button variant="primary raise" href={viartriallink} target="_blank" rel="noreferrer noopener">More info on Facebook</Button>
                            </div>                                  
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="card">
                            <img src={prospan} alt="Prospan"/>
                            <div className="secondarybg">
                                <h5>Sooth and relieve with <span className="highlight">Prospan</span></h5>
                                <p>This clinically proven cough syrup offers effective respiratory support and it is ideal for all ages. Trust Prospan for gentle and dependable relief from cough and chest congestion.</p>
                                <Button variant="primary raise" href={prospanlink} target="_blank" rel="noreferrer noopener">More info on Facebook</Button>
                            </div>  
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeMember;