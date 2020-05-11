import React from 'react';
import logo from './images/banner.png';

import SideMenu from './sideMenu';
import CustomerAccount from './customerManagerAccount';
import CustomerSupport from './CustomerSupport';
import SearchHistory from './SearchHistory';
import Questionnaire from './Questionnaire';
import CustomerOrder from './CustomerOrder';
import ItemsLoved from './ItemsLoved';
import Inbox from './Inbox';

function Customer() {
    return (
        <div className="customerAccount">
            <div className="bannerImage" id="bannerImage">
                {/* <a href="#">
                    <img src={logo} alt="Logo"></img>
                </a> */}
            </div>
            <div className="accountBlock">
                <div className="row">
                    <div className="col-md-4">

                        <div className="list">
                            <SideMenu/>
                        </div>

                    </div>
                    <div className="col-md-8">

                        <div className="tab-content">
                            <div id="acc" className="tab-pane fade in active">
                                <CustomerAccount/>
                            </div>
                            <div id="ques" className="tab-pane fade">
                                <Questionnaire/>
                            </div>
                            <div id="order" className="tab-pane fade">
                                <CustomerOrder/>
                            </div>
                            <div id="inbox" className="tab-pane fade">
                                <Inbox/>
                            </div>
                            <div id="lovedItems" className="tab-pane fade">
                                <ItemsLoved/>
                            </div>
                            <div id="history" className="tab-pane fade">
                                <SearchHistory/>
                            </div>
                            <div id="support" className="tab-pane fade">
                                <CustomerSupport/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Customer;