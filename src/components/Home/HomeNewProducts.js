import arrowicon from '../../images/products/arrow.png';
import card1 from '../../images/products/illness-ear-nose-throat-preparations/dymista-nasal-spray.jpg';
import card2 from '../../images/products/supplements-brain-boosters/cavinton.jpg';
import card3 from '../../images/products/dermatological/elidel-cream.jpg';
import card4 from '../../images/products/illness-urinary-incontinence/spasmolyt.png';
import card5 from '../../images/products/supplements-heart-health/tocoq10-coenzyme.png';

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function HomeNewProducts() {
    return(
        <>
            <div className="container section new-products">
                <div className="row tertiarybg">
                    <div className="col-12 col-lg-4 side-title">
                        <h3>Latest arrivals</h3>
                        <hr/>
                        <p>Elevate your healthcare offerings with cutting-edge medications and treatments just in! Our new products uphold the highest quality and effectiveness standards.</p>
                        <p>Stay ahead in healthcare with our carefully curated products. </p>
                    </div>
                    <div className="col-12 col-lg-8 product-div">
                        <button className="pre-btn"><img src={arrowicon} alt=""/></button>
                        <button className="nxt-btn"><img src={arrowicon}  alt=""/></button>

                        <div className="product-container">
                            <div className="product-card">
                                <div className="product-image">
                                    <img src={card1} className="product-thumb" alt=""/>
                                </div>
                                <div className="product-info">
                                    <p className="product-brand">Dymista nasal spray</p>
                                    <p className="product-category">Illness / Ear, nose & throat</p>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src={card2} className="product-thumb" alt=""/>
                                </div>
                                <div className="product-info">
                                    <p className="product-brand">Cavinton vinpocetiney</p>
                                    <p className="product-category">Supplements / Brain booster</p>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src={card3} className="product-thumb" alt=""/>
                                </div>
                                <div className="product-info">
                                    <p className="product-brand">Elidel Cream</p>
                                    <p className="product-category">Dermatological</p>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src={card4} className="product-thumb" alt=""/>
                                </div>
                                <div className="product-info">
                                    <p className="product-brand">Spasmolyt</p>
                                    <p className="product-category">Urinary incontinence</p>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src={card5} className="product-thumb" alt=""/>
                                </div>
                                <div className="product-info">
                                    <p className="product-brand">TocoQ10 Coenzyme Q10 (Reduced Form)</p>
                                    <p className="product-category">Heart health</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeNewProducts;