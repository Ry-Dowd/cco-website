import React from 'react';

import Nav from '../components/Nav'
import Testimonials from '../components/Testimonials'

const TestimonialsPage = (props) => {

  return ( 
    <>
      <Nav current='testimonials' />
      <Testimonials />
    </>
   );
}
 
export default TestimonialsPage;