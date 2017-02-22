import React from 'react'
import Header from './Header';
import Footer from './Footer';

const LayoutFull = (props) => (
  <div className="full-wrapper">
    <Header component={Header}/>
    <div className="main">
      {props.children}	  
    </div>
    <Footer component={Footer}/>
  </div>
)
export default LayoutFull
