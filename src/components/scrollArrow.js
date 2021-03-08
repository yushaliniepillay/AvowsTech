import React, {useState} from 'react';
// import {FaArrowCircleUp} from 'react-icons/fa';
import { UpCircleFilled } from '@ant-design/icons';
import '../components/layouts/layout.css';

const ScrollArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 300){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  

    return (
        <div>
            {/* <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/> */}
            <UpCircleFilled className="scrollTop" onClick={scrollTop} style={{height: 30, display: showScroll ? 'flex' : 'none'}}/>
        </div>
    )
}

export default ScrollArrow
