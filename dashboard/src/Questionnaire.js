import React from 'react';
import logo from './images/banner.png';

function Questionnaire() {
    return (
        <div className="toggleContent" id="toggleContent">
            <h3>Manage Questionnaires</h3>
            <button className="btn btn-default sideBtn">Create new one</button>
            <div className="commonQuesBlock">
                <div>
                    <span className="quesNo">123</span>
                </div>
                <div className="questions">
                    <div className="contentBlock">
                        <div className="quesDetails">
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="designIcon">
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                        </div>
                    </div>
                    <div className="quesButton">
                        <ul className="btnLinks">
                            <li>
                                <a href="#">Forward</a>
                            </li>
                            <li>
                                <a href="#">Edit</a>
                            </li>
                            <li>
                                <a href="#">View</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="questions">
                    <div className="contentBlock">
                        <div className="quesDetails">
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="designIcon">
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                        </div>
                    </div>
                    <div className="quesButton">
                        <ul className="btnLinks">
                            <li>
                                <a href="#">Forward</a>
                            </li>
                            <li>
                                <a href="#">Edit</a>
                            </li>
                            <li>
                                <a href="#">View</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="questions">
                    <div className="contentBlock">
                        <div className="quesDetails">
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="designIcon">
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                            <span className="miniIcon">icon</span>
                        </div>
                    </div>
                    <div className="quesButton">
                        <ul className="btnLinks">
                            <li>
                                <a href="#">Forward</a>
                            </li>
                            <li>
                                <a href="#">Edit</a>
                            </li>
                            <li>
                                <a href="#">View</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Questionnaire;