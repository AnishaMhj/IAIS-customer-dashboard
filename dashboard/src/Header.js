import React from 'react';
import logo from './images/iais.png'

function Header() {
    return (
        <div>

            <div className="header-wrapper" id="header-wrapper">
                <div className="header-container">
                    <div className="row">
                        <div className="logo-block col-md-4">
                            <a href="#">
                                <img src={logo} alt="Logo"></img>
                            </a>
                        </div>
                        <div className="search-block col-md-4">
                            <form className="navbar-form navbar-left" action="/action_page.php">
                                <div classNameName="input-group">
                                    <input type="text" className="form-control" placeholder="Search" name="search"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <ul className="headerTags">
                                <li><a>flag</a></li>
                                <li><a>Become a designer</a></li>
                                <li className="startBtn"><a>Start your artwork</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;