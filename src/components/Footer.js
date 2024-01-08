import logo from '../images/logo.png';
import facebookicon from '../images/icons/facebookicon.png';
import AttributionsModal from './AttributionsModal.js';

import { Link } from "react-router-dom";

const viartriallink = "https://www.facebook.com/viartrilsingapore?_rdc=1&_rdr";
const prospanlink = "https://www.facebook.com/prospansingapore?_rdc=1&_rdr";

function Footer() {

    return(
        <>
            <div className="footer">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col">
                            <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <p>Delivering Health, One Prescription At A Time</p>
                            <p><Link to={viartriallink} target="_blank" rel="noreferrer noopener"><img className="mini-icon"  src={facebookicon} alt="Facebook"/>Viartril-S Facebook</Link></p>
                            <p><Link to={prospanlink} target="_blank" rel="noreferrer noopener"><img className="mini-icon"  src={facebookicon} alt="Facebook"/>Prospan Facebook</Link></p>
                        </div>

                        <div className="col-12 col-md-4">
                            <p className="footer-title">Our products</p>
                            <p><Link to="/products/brain-boosters-memory-enhancers" target="_blank" rel="noreferrer noopener">Supplements</Link></p>
                            <p><Link to="/products/blunt-trauma" target="_blank" rel="noreferrer noopener">Injury</Link></p>
                            <p><Link to="/products/cough-cold" target="_blank" rel="noreferrer noopener">Illness</Link></p>
                            <p><Link to="/products/dermatological" target="_blank" rel="noreferrer noopener">Dermatological</Link></p>
                            <p><Link to="/products/disinfectants" target="_blank" rel="noreferrer noopener">Disinfectants</Link></p>
                            <p><Link to="/products/medical-tools" target="_blank" rel="noreferrer noopener">Medical tools</Link></p>
                            <p><Link to="/products/wristbands" target="_blank" rel="noreferrer noopener">Wristbands</Link></p>
                        </div>

                        <div className="col-12 col-md-4">
                            <p className="footer-title">Contact us</p>
                            <p>+65 6286 0291</p>
                            <p>705 Sims Drive #02-07, Shun Li Industrial Complex, Singapore 387384</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col copyright">
                            <AttributionsModal/>
                            <p>• Copyright © 2023 Pharmline Marketing Pte Ltd</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Footer;