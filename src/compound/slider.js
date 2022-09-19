
import React from 'react'
import Carousel from "react-material-ui-carousel";
import image1 from "../Images/screen1.png";
import image2 from '../Images/screen2.png'
import image3 from '../Images/Screen3.png'


const slider = () => {

  return (
    <div className="container">
    <div className='slide'>
      <Carousel navButtonsAlwaysVisible={false} autoPlay={true} >
        <img className="imgs" src={image1} alt="screen" />
        <img  className="imgs"src={image2} alt='destination-2' />
        <img  className="imgs"src={image3} alt='destination-3' />
      </Carousel>
      </div>
      <h2 >Description</h2>
      <p style={{textAlign: 'justify', paddingTop: 5,paddingLeft: 50, paddingRight: 65}}>Notes is a notetaking app developed by Apple. It is provided on their iOS and macOS operating systems, the latter starting with OS X Mountain Lion. It functions as a service for making short text notes, which can be synchronized between devices using Apple's iCloud service</p>

    </div>
  );
};
export default slider;
