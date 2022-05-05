import React, {useContext, useState} from 'react';
import {PlumbingContext} from '../plumbingContextProvider'
import Footer from '../components/Footer'

function Home() {
  return (
  <>

  <div className="home-container">
    <h1> With all your plumbing needs, industrial and residential!</h1>
    <h1> Questions? Call now 615-000-0000</h1>
  </div>
  <Footer />
  </>
  )
}

export default Home