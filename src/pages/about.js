import React from "react"

import Nav from '../components/Nav'
import About from '../components/About'

const AboutPage = (props) => {

  return ( 
    <>
      <Nav current='about'/>
      <About />
    </>
   );
}
 
export default AboutPage;
