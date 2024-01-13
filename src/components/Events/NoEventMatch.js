import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import errorImg from "../../images/page404.svg";

function NoEventMatch () {
    return(
        <>
            <div className="container section">
                <div className="row flex-lg-row-reverse align-items-center">

                    <div className="col-sm-12 col-lg-6">
                        <img className="banner-img" src={errorImg} alt="banner"/>
                    </div>

                    <div className="col-sm-12 col-lg-6 py-5">
                        <h1>Whoops! Page not found</h1>
                        <p>It looks like the page you're trying to find does not exist. <Link to="/contact">Contact us</Link> to let us know what you're trying to find and we will get back to you quickly!</p>

                        <Link
                            to={{
                                pathname: `/`
                            }}
                            >
                                <Button variant="primary raise">Back to home</Button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
}

export default NoEventMatch;