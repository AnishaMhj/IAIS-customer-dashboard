import React, { useState } from 'react';
import './App.css';
import './thestyles.css'

import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Customer from './Customer';
import Form from './form';


function App(){



  return(

    <div id="wrapper">
      <Header />
       <Customer />
      {/* <Form/> */}

      <Footer /> 
    </div>

  );
}

export default App;