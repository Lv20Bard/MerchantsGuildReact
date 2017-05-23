import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    
    render(){
        return(
        <div className="nav-bar">

            <div className="brand"><span className="hideSmall logo-text text-center">The Merchants Guild</span></div>


            <div className="profile-tab dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="hideSmall">Profile&nbsp;</span><i className="nav-text fa fa-user-circle-o" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a className="view-profile-btn" >View Profile</a></li>
                    <li><a className="logout-btn" >Logout</a></li>
                </ul>
            </div>


            <div  className="profile-tab dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="hideSmall">Login&nbsp;</span><i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a className="facebook-login-dropdown-btn" >Login With Facebook</a></li>
                    <li><a className="google-login-dropdown-btn" >Login With Google</a></li>
                </ul>
            </div>




            <div className="seller-tab dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a className="browse-request-btn" to={`/requests`}>Browse Requests </a></li>
                    <li><a className="browse-items-btn" to={`/store`}>Browse Items</a></li>	
                </ul>
            </div>


            <div className="buyer-tab dropdown pull-right nav-dropdown">
                <button  className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Post<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a className="list-product-btn" >Post A Product</a></li>
                    <li><a className="place-request-btn" >Post a Request</a></li>
                </ul>
            </div>

        </div> 


        );
    }
}


export default Header;