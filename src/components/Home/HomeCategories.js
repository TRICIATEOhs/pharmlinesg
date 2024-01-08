import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import homeCategoriesJson from "../../data/homeCategories.js";

function HomeCategories() {

    const categoryList = homeCategoriesJson && homeCategoriesJson.map( category => {
        return(
            <div key={category.id}>
                <Col>
                    <Link
                    className="btn icon-btn"
                    to={{
                        pathname: `/products/${category.urlName}`
                    }}
                    >
                    <img className="icon supplements-main" src={category.defaultIcon} alt={category.categoryName}/>
                    <img className="icon supplements-hover" src={category.hoverIcon} alt={category.categoryName}/>
                    </Link>
                    <span className="caption">{category.categoryName}</span>
                </Col>
            </div>
        );
    });


    return(
        <>
            <div className="container section categories middle-title">
                <div className="row">
                    <div className="col">
                        <h3>Browse products by categories</h3>
                        <hr/>
                        <p className="description">Browse our diverse catalog featuring an extensive array of over 80 high-quality products across various categories to find the pharmaceutical solutions that best suit your needs.</p>
                    </div>
                </div>

                <div className="row cat-item ">
                    <Row xs={2} md={4} lg={7} className="g-4">
                        {categoryList}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default HomeCategories;