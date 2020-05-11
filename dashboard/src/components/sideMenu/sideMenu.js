import React from 'react';

//sidemenu icon images
import profileImg from './images/custprofile.png'
import History from './images/history.png'
import Inbox from './images/inbox.png'
import LovedItems from './images/loveditems.png'
import Orders from './images/orders.png'
import Question from './images/question.png'
import Support from './images/support.png'

function SideMenu() {
    return (
        <div id="sideMenu" className="sideMenu">
            {/* <div className="menuTitle">
                <span className="leftIcon"><img src={profileImg} alt="profileIcon"></img></span>
                <span className="rightTitle">
                    <h3>Account Setings</h3>
                </span>
            </div> */}
            <ul className="navList nav-pills">
                <li className="active">
                    <span className="sideIcon"><img src={profileImg} alt="profileIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#acc">Account Settings</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={Question} alt="questionIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#ques">Questionaire</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={Orders} alt="orderIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#order">Orders</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={Inbox} alt="inboxIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#inbox">Inbox</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={LovedItems} alt="lovedItemsIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#lovedItems">Loved items</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={History} alt="historyIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#history">History research</a>
                    </span>
                </li>
                <li>
                    <span className="sideIcon"><img src={Support} alt="supportIcon"></img></span>
                    <span className="sideTitle">
                        <a data-toggle="tab" href="#support">Support</a>
                    </span >
                </li>
            </ul>

        </div>
    );
}

export default SideMenu;