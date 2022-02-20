import React from 'react';
import "../container/Container.css";
import Banner from './banner/Banner.js';
import Built from './built/Built.js';
import Ourplatfroms from  './ourplatfroms/Ourplatfroms.js';
import Founder from './founder/Fonder.js';
import Investor from './investor/Investor';
import Accordion from "./accordion/Accordion.js"
import Startups from './startups/Startups';



const Container = () => {
  return(
    
    <div>
      <Banner/>
      <Built/>
      <Ourplatfroms/>
      <Founder/>
      <Investor/> 
      <Accordion/>
      <Startups/>
    </div>
   
  );
};

export default Container;
