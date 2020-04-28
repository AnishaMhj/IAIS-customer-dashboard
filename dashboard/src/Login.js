import React from 'react';

function Login() {
    return (
        <div className="signup-container">
            <form className="form-inline" action="/action_page.php">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email/phone number"/>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="cpwd"
                        placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        id="vcode"
                        placeholder="Verified Code"/>Message has been sent through email/SMS
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" id="designer"/>I'm a designer</label>
                    <label><input type="checkbox" id="client"/>I'm a client</label>
                    <label><input type="checkbox" id="both"/>I'm both</label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

export default Login;