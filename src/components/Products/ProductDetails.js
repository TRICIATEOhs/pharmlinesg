import { useParams } from 'react-router-dom';
import ProductNavbar from './ProductNavbar.js';
import Accordion from 'react-bootstrap/Accordion';

/*Supplements*/
import BrainBoosters from './Supplements/BrainBoosters.js';
import HeartHealth from './Supplements/HeartHealth.js';
import JointHealth from './Supplements/JointHealth.js';
import LiverTonic from './Supplements/LiverTonic.js';
import NaturalAntiOxidants from './Supplements/NaturalAntiOxidants.js';
import HormonesOralContraceptives from './Supplements/HormonesOralContraceptives.js';
import SlimmingWeightMgmt from './Supplements/SlimmingWeightMgmt.js';
/*Injury*/
import BluntTrauma from './Injury/BluntTrauma.js';
import MuscleRelaxants from './Injury/MuscleRelaxants.js';
import WoundHealing from './Injury/WoundHealing.js';
/*Illness*/
import CoughCold from './Illness/CoughCold.js';
import EarNoseThroat from './Illness/EarNoseThroat.js';
import UrinaryIncontinence from './Illness/UrinaryIncontinence.js';
import Dermatological from './Dermatological/Dermatological.js';
import Disinfectants from './Disinfectants/Disinfectants.js';
import MedicalTools from './MedicalTools/MedicalTools.js';

function ProductDetails() {

    const params = useParams();
    const productid = params.productid;

    return(
        <>
            {
                productid === "brain-boosters-memory-enhancers" ? ( 
                <>
                    <div className="col-12 col-md-4">
                        <Accordion defaultActiveKey="0" flush>
                            <ProductNavbar />
                        </Accordion>
                    </div>
                    <div className="col-12 col-md-8">
                        <BrainBoosters />
                    </div>
                </>
                ) : productid === "heart-health" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <HeartHealth />
                        </div>
                    </>
                ) : productid === "joint-health" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <JointHealth />
                        </div>
                    </>
                ) : productid === "liver-tonic" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <LiverTonic />
                        </div>
                    </>
                ) : productid === "natural-antioxidants" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <NaturalAntiOxidants />
                        </div>
                    </>
                ) : productid === "hormones-oral-contraceptives" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <HormonesOralContraceptives />
                        </div>
                    </>
                ) : productid === "slimming-weight-management" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <SlimmingWeightMgmt />
                        </div>
                    </>
                ) : productid === "blunt-trauma" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="1" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <BluntTrauma />
                        </div>
                    </>
                ) : productid === "muscle-relaxants" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="1" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <MuscleRelaxants />
                        </div>
                    </>
                ) : productid === "wound-healing" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="1" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <WoundHealing />
                        </div>
                    </>
                ) : productid === "cough-cold" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="2" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <CoughCold />
                        </div>
                    </>
                ) : productid === "ear-nose-throat" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="2" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <EarNoseThroat />
                        </div>
                    </>
                ) : productid === "urinary-incontinence" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="2" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <UrinaryIncontinence />
                        </div>
                    </>
                ) : productid === "dermatological" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="3" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <Dermatological />
                        </div>
                    </>
                ) : productid === "disinfectants" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="4" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <Disinfectants />
                        </div>
                    </>
                ) : productid === "medical-tools" ? (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="5" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <MedicalTools />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-12 col-md-4">
                            <Accordion defaultActiveKey="0" flush>
                                <ProductNavbar />
                            </Accordion>
                        </div>
                        <div className="col-12 col-md-8">
                            <BrainBoosters />
                        </div>
                    </>
                )
            }
        </>
    );
}

export default ProductDetails;