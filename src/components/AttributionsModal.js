import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

import iconSupplements from '../images/icons/iconSupplements.png';
import iconInjury from '../images/icons/iconInjury.png';
import iconIllness from '../images/icons/iconIllness.png';
import iconSkin from '../images/icons/iconSkin.png';
import iconDisinfectant from '../images/icons/iconDisinfectant.png';
import iconMedicalTools from '../images/icons/iconMedicalTools.png';
import boldRedMedicalTools from '../images/icons/boldRedMedicalTools.png';
import facebookicon from '../images/icons/facebookicon.png';


const fatihicon = 'https://www.flaticon.com/free-icons/supplement';
const mavadee = 'https://www.flaticon.com/free-icons/patch';
const eucalyp = 'https://www.flaticon.com/free-icons/cough';
const surang = 'https://www.flaticon.com/free-icons/rash';
const amonrat = 'https://www.flaticon.com/free-icons/germ';
const freepik = 'https://www.flaticon.com/free-icons/surgery';
const triangle = 'https://www.flaticon.com/free-icons/surgical-instrument';
const fbFreepik = 'https://www.flaticon.com/free-icons/facebook';

const karolina = 'https://www.pexels.com/photo/yellow-stethoscope-4047068/';
const nataliyaWhite = 'https://www.pexels.com/photo/flat-lay-photo-of-alternative-medicines-7615460/';
const nataliyaGreen = 'https://www.pexels.com/photo/flat-lay-photo-of-alternative-medicines-7615574/';
const rdne = 'https://www.pexels.com/photo/elderly-couple-holding-bouquet-of-flowers-while-holding-hands-5637572/';
const shotpot = 'https://www.pexels.com/photo/mom-and-dad-having-fun-playing-together-with-their-daughter-7705884/';

function AttributionsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p>
        <Link href={() => false} onClick={handleShow}>Flaticon and Pexels attribution</Link>
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attributions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Pexels Attributions</b></p>
          <p>
            Pink stethoscope photo by 
            <Link title="surgery icons" to={karolina} target="_blank" rel="noreferrer noopener"> Karolina Grabowska</Link>
          </p>
          <p>
            Pills with white background by 
            <Link title="surgical icons" to={nataliyaWhite} target="_blank" rel="noreferrer noopener"> Nataliya Vaitkevich</Link>
          </p>
          <p>
            Pills with green background by 
            <Link title="surgical icons" to={nataliyaGreen} target="_blank" rel="noreferrer noopener"> Nataliya Vaitkevich</Link>
          </p>
          <p>
            Elderly couple photo by 
            <Link title="surgical icons" to={rdne} target="_blank" rel="noreferrer noopener"> RDNE Stock project</Link>
          </p>
          <p>
            Family photo by 
            <Link title="surgical icons" to={shotpot} target="_blank" rel="noreferrer noopener"> ShotPot</Link>
          </p>


          <p><b>Flaticon Attributions</b></p>
          <p>
            <img className="mini-icon" src={iconSupplements} alt="supplements icon"/> Supplement icons created by
            <Link title="supplement icons" to={fatihicon} target="_blank" rel="noreferrer noopener"> fatihicon</Link> 
          </p>
          <p>
              <img className="mini-icon" src={iconInjury} alt="patch icons"/> Patch icons created by 
              <Link title="patch icons" to={mavadee} target="_blank" rel="noreferrer noopener"> mavadee</Link> 
          </p>
          <p>
              <img className="mini-icon" src={iconIllness} alt="cough icons"/> Cough icons created by 
              <Link title="cough icons" to={eucalyp} target="_blank" rel="noreferrer noopener"> eucalyp</Link> 
          </p>
          <p>
            <img className="mini-icon" src={iconSkin} alt="rash icons"/> Rash icons created by
            <Link title="rash icons" to={surang} target="_blank" rel="noreferrer noopener"> surang</Link> 
          </p>
          <p>
            <img className="mini-icon" src={iconDisinfectant} alt="germ icons"/> Germ icons created by
            <Link title="germ icons" to={amonrat} target="_blank" rel="noreferrer noopener"> amonrat rungreangfangsai</Link> 
          </p>
          <p>
            <img className="mini-icon" src={iconMedicalTools} alt="surgical icons"/> Surgical instrument icons created by
            <Link title="surgical icons" to={triangle} target="_blank" rel="noreferrer noopener"> triangle squad</Link> 
          </p>
          <p>
            <img className="mini-icon" src={boldRedMedicalTools} alt="surgery icons"/> Surgery icons created by
            <Link title="surgery icons" to={freepik} target="_blank" rel="noreferrer noopener"> freepik</Link> 
          </p>
          <p>
            <img className="mini-icon" src={facebookicon} alt="surgical icons"/> Facebook icons created by
            <Link title="surgical icons" to={fbFreepik} target="_blank" rel="noreferrer noopener"> freepik</Link> 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AttributionsModal;