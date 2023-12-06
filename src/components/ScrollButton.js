import { useState, useEffect, useRef } from "react";
import { ArrowUpCircleFill } from 'react-bootstrap-icons'; 
import { Link } from "react-router-dom";
  
const ScrollButton = () =>{ 
  
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 100 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);
  
  return ( 


    <div className="backToTop">
      {isVisible && (
        <Link onClick={scrollToTop}>
        <span className="red-txt"><ArrowUpCircleFill size="40"/></span>
      </Link>
      )}
    </div>

  ); 
} 
  
export default ScrollButton; 