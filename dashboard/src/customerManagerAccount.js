import React from 'react';
import logo from './images/banner.png';
import profileImg from './images/customer.png';

function CustomerAccount() {
    return (
        <div className="toggleContent" id="toggleContent">
            <h3>Manage Account</h3>
            <form role="form" className="formDetails">
                <div className="row">
                    <div className="col-md-4">
                        <div className="rightBlockContent">
                            <div class="profileBlock">
                                <img src={profileImg} alt="profileIcon"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="leftBlockContent">

                           

                                <div className="form-group">

                                    <div className="input-group margin-bottom-10">
                                        <input
                                            type="text"
                                            className="form-control editField"
                                            value="Full Name"
                                            />
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                                    </div>

                                    <div className="input-group margin-bottom-10">
                                        <input
                                            type="email"
                                            className="form-control editField"
                                            value="Email"
                                           />
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                                    </div>

                                    <div className="input-group margin-bottom-10">
                                        <input
                                            type="password"
                                            className="form-control editField"
                                            value="Password"
                                            />
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                    <div className="col-md-12 paymentGroup">

                        <div className="form-group">

                            <div className="input-group margin-bottom-10">
                                <input
                                    type="text"
                                    className="form-control editField"
                                    value="Payment Method"
                                    />
                                 <div className="input-group-addon">
                                            <span className="addMode">Add</span>
                                        </div>
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                            </div>

                            <div className="input-group margin-bottom-10">
                                <input
                                    type="text"
                                    className="form-control editField"
                                    value="Address"
                                  />
                                 <div className="input-group-addon">
                                            <span className="addMode">Add</span>
                                        </div>
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                            </div>

                            <div className="input-group margin-bottom-10">
                                <input
                                    type="number"
                                    className="form-control editField"
                                    value="Phone Number"
                                   />
                                 <div className="input-group-addon">
                                            <span className="addMode">Add</span>
                                        </div>
                                        <div className="input-group-addon">
                                            <span className="editMode">Edit</span>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-default saveBtn">Save</button>
            </form>
        </div>
    );

}

// $(document).ready(function () {     $('span').click( function() {
// if($(this).parents().siblings('input').is('[readonly]')){
// $(this).parents().siblings('input').prop('readonly', false); turns the
// readonly off         }else{
// $(this).parents().siblings('input').prop('readonly', true); turns the
// readonly off         }     }); });

export default CustomerAccount;