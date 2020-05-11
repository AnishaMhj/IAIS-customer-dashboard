import React, {useState} from 'react';
import './App.css';
import './thestyles.css'

import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Customer from './Customer';
import Form from './form';
// import Navbar from "./homepage/src/components/layouts/Navbar";
import ManageFaq from './components/faq/faqBlock'

function App() {

    return (

        <div id="wrapper">
            <Header/> 
            <Customer />

            {/* <ManageFaq /> */}
           
            <Footer/>

        </div>

    );
}

export default App;