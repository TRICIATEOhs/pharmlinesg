
import { Link, useNavigate, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useMediaQuery } from 'react-responsive';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import productListJson from "../../data/productList.js";

const ProductNavbar = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const params = useParams();
  const activeTab = params.productid;

  /*Function is for single accordion with no sub-categories*/
  let navigate = useNavigate(); 
  function routeChange(pathName){ 
    if(pathName === "dermatological") {
      let path = `/products/dermatological`; 
      navigate(path);
    } else if(pathName === "disinfectants") {
      let path = `/products/disinfectants`; 
      navigate(path);
    } else if(pathName === "medical-tools") {
      let path = `/products/medical-tools`; 
      navigate(path);
    }
  }

  const productDDL = productListJson && productListJson.map( category => {
    return(
      <div key={category.categoryId}>

        {
          (category.categoryId !== 5 && category.categoryId !== 6)?
            <Dropdown.ItemText>{category.name}</Dropdown.ItemText>
          :
          ""
        }

        {category.products.map( product => (
          <div key={product.productId}>

            {
              (product.urlName === "brain-boosters-memory-enhancers")?
              <Link 
                to={{
                  pathname: `/products/${product.urlName}`
                }}
                className={`${((activeTab === `${product.urlName}`) || (activeTab === "")) ? 'itemActive' : ''}`}> 
                <Dropdown.Item as="button">{product.displayText}</Dropdown.Item>
              </Link>

              :

              <Link 
              to={{
                pathname: `/products/${product.urlName}`
              }}
              className={`${((activeTab === `${product.urlName}`)) ? 'itemActive' : ''}`}> 
                <Dropdown.Item as="button">{product.displayText}</Dropdown.Item>
              </Link>
            }
            
          </div>
        ))}  
      </div>
    );
  })

  // const productAccordion = productListJson && productListJson.map( category => {

  //   let eventKey = category.categoryId - 1;

  //   return(
  //     <div key={category.categoryId}>

  //       {
  //         (category.categoryId !== 4 && category.categoryId !== 5 && category.categoryId !== 6)?
          
  //         <Accordion.Item eventKey={eventKey}>
  //           <Accordion.Header>{category.name}</Accordion.Header>
  //           <Accordion.Body>
  //               <ul>

  //               {category.products.map( product => (
                  
  //                 <div key={product.productId}>
  //                   {
  //                     (product.urlName === "brain-boosters-memory-enhancers")?
  //                       <li><Link 
  //                       to={{
  //                         pathname: `/products/${product.urlName}`
  //                       }}
  //                       className={`${((activeTab === `${product.urlName}`) || (activeTab === "")) ? 'itemActive' : ''}`}> 
  //                       {product.displayText}</Link></li>

  //                     :

  //                     <li><Link 
  //                     to={{
  //                       pathname: `/products/${product.urlName}`
  //                     }}
  //                     className={`${((activeTab === `${product.urlName}`)) ? 'itemActive' : ''}`}> 
  //                     {product.displayText}</Link></li>
  //                   }
  //                 </div>
  //               ))}  
  //               </ul>
  //           </Accordion.Body>
  //         </Accordion.Item>

  //         :
          
  //         <Accordion.Item eventKey={eventKey} className="singleItem">
  //           {category.products.map( product => (
              
  //             <div key={product.productId}>

  //               <Accordion.Header className="catItem" onClick={() => routeChange(`${product.urlName}`)}>
  //                 <Link 
  //                 to={{
  //                   pathname: `/products/${product.urlName}`
  //                 }}
  //                 className={`${activeTab === `${product.urlName}` ? 'itemActive' : ''}`}>
  //                 {product.displayText}</Link>
  //               </Accordion.Header>

  //             </div>
  //           ))}  
  //         </Accordion.Item>

  //       }

  //     </div>
  //   );

  // })

  return (
    <>
      {
        isMobile?
        <DropdownButton className="dropdown-item-button" title="Select category">
          {productDDL}
        </DropdownButton>

        :

        <div>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Supplements</Accordion.Header>
              <Accordion.Body>
                  <ul>
                    <li><Link 
                      to="/products/brain-boosters-memory-enhancers" 
                      className={`${((activeTab === "brain-boosters-memory-enhancers") || (activeTab === "")) ? 'itemActive' : ''}`}> 
                      Brain boosters / Memory enhancers</Link></li>
                    <li><Link 
                      to="/products/heart-health" 
                      className={`${activeTab === "heart-health" ? 'itemActive' : ''}`}>
                      Heart health </Link></li>
                    <li><Link 
                      to="/products/joint-health" 
                      className={`${activeTab === "joint-health" ? 'itemActive' : ''}`}>
                      Joint health </Link></li>
                    <li><Link 
                      to="/products/liver-tonic" 
                      className={`${activeTab === "liver-tonic" ? 'itemActive' : ''}`}>
                      Liver tonic </Link></li>
                    <li><Link 
                      to="/products/natural-antioxidants" 
                      className={`${activeTab === "natural-antioxidants" ? 'itemActive' : ''}`}>
                      Natural anti-oxidants </Link></li>
                    <li><Link 
                      to="/products/hormones-oral-contraceptives" 
                      className={`${activeTab === "hormones-oral-contraceptives" ? 'itemActive' : ''}`}>
                      Hormones / Oral contraceptives </Link></li>
                    <li><Link 
                      to="/products/slimming-weight-management" 
                      className={`${activeTab === "slimming-weight-management" ? 'itemActive' : ''}`}>
                      Slimming / Weight management </Link></li>
                  </ul>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
              <Accordion.Header>Injury</Accordion.Header>
              <Accordion.Body>
                  <ul>
                    <li><Link 
                    to="/products/blunt-trauma" 
                    className={`${activeTab === "blunt-trauma" ? 'itemActive' : ''}`}>
                    Blunt trauma</Link></li>
                    <li><Link 
                    to="/products/muscle-relaxants" 
                    className={`${activeTab === "muscle-relaxants" ? 'itemActive' : ''}`}>
                    Muscle relaxants</Link></li>
                    <li><Link 
                    to="/products/wound-healing" 
                    className={`${activeTab === "wound-healing" ? 'itemActive' : ''}`}>
                    Wound healing</Link></li>
                  </ul>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
              <Accordion.Header>Illness</Accordion.Header>
              <Accordion.Body>
              <ul>
                  <li><Link 
                  to="/products/cough-cold" 
                  className={`${activeTab === "cough-cold" ? 'itemActive' : ''}`}>
                  Cough & cold preparations</Link></li>
                  <li><Link 
                  to="/products/ear-nose-throat" 
                  className={`${activeTab === "ear-nose-throat" ? 'itemActive' : ''}`}>
                  Ear, nose & throat preparations</Link></li>
                  <li><Link 
                  to="/products/urinary-incontinence" 
                  className={`${activeTab === "urinary-incontinence" ? 'itemActive' : ''}`}>
                  Urinary incontinence</Link></li>
                </ul>
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="singleItem">
              <Accordion.Header className="catItem" onClick={() => routeChange("dermatological")}>
                <Link 
                to="/products/dermatological" 
                className={`${activeTab === "dermatological" ? 'itemActive' : ''}`}>
                Dermatological</Link>
              </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="singleItem">
              <Accordion.Header className="catItem" onClick={() => routeChange("disinfectants")}>
                <Link 
                to="/products/disinfectants" 
                className={`${activeTab === "disinfectants" ? 'itemActive' : ''}`}>
                Disinfectants</Link>
              </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="singleItem">
              <Accordion.Header className="catItem" onClick={() => routeChange("medical-tools")}>
                <Link 
                to="/products/medical-tools" 
                className={`${activeTab === "medical-tools" ? 'itemActive' : ''}`}>
                Medical Tools</Link>
              </Accordion.Header>
          </Accordion.Item>
        </div>
      }


    </>
  );
}

export default ProductNavbar;