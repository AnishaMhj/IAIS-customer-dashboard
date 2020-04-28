import React from 'react';
import logo from './images/iais.png'

function Footer() {
    return (
        <div id="footer-wrapper">

            <div id="footer-container" className="footer-container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="firsts-column">
                            <a href="#">
                                <img src={logo} alt="Logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="second-column">
                            <p className="t&c">
                                <a href="#">Terms & Conditions</a>
                            </p>
                            <p className="faq">
                                <a href="#">Requent Questions</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="third-column">
                            <p className="about">
                                <a href="#">About</a>
                            </p>
                            <p className="login">
                                <a href="#">Register / Log in</a>
                            </p>
                            <p className="create">
                                <a href="#">Create art work</a>
                            </p>
                            <p className="stock">
                                <a href="#">Stock</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Footer;