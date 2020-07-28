import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const IndexPage = () => {

  const {currentPage, setCurrentPage} = useState()
return (
  <Router>
    <Nav currentPage={currentPage} setPage={setCurrentPage}></Nav>
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/testimonials'>
        <Testimonials />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
)}

export default IndexPage
