import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import dataJson from "../../data/homeNewProducts.js";

function HomeNewProducts() {

    const hasActiveStatus = dataJson.find((item) => (item.status).toLowerCase() === "active");
    let displaySection = false;
    if(hasActiveStatus !== undefined) {
        displaySection = true;
    }

    const jsonList = dataJson && dataJson.map( item => {

        return(
            <>
                {
                    (item.status).toLowerCase() === "active"?
                    <div key={item.id}>
                        <Col>
                            <div className="product-card">
                                <div className="product-image">
                                    <Link
                                    to={{
                                        pathname: `/products/${item.urlName}`
                                    }}>
                                        <img src={item.image} className="product-thumb" alt=""/>
                                    </Link>
                                </div>
                                <div className="product-info">
                                <Link
                                    to={{
                                        pathname: `/products/${item.urlName}`
                                    }}>
                                        <p className="product-brand">{item.productName}</p>
                                    </Link>
                                    
                                    <p className="product-category">{item.mainCategory} / {item.productCategory}</p>
                                </div>
                            </div>

                        </Col>

                    </div>
                    :
                    ""
                }
            </>
        );
    });


    return(
        <>
            {
                displaySection?

                    <div className="container section new-products">
                        <div className="row tertiarybg">
                            <div className="col-12 col-lg-4 side-title">
                                <h3>Latest arrivals</h3>
                                <hr/>
                                <p>Elevate your healthcare offerings with cutting-edge medications and treatments just in! Our new products uphold the highest quality and effectiveness standards.</p>
                                <p>Stay ahead in healthcare with our carefully curated products. </p>
                            </div>
                            <div className="col-12 col-lg-8">

                                <div className="product-container">

                                    <Row xs={2} md={3} lg={3} className="g-4">
                                        {jsonList}
                                    </Row>

                                </div>
                            </div>
                        </div>
                    </div>
                :
                ""
            }

        </>
    );
}

export default HomeNewProducts;