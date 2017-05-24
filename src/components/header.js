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
                    <li><Link className="browse-request-btn" to={`/requests`}>Browse Requests </Link></li>
                    <li><Link className="browse-items-btn" to={`/store`}>Browse Items</Link></li>	
                </ul>
            </div>


            <div className="buyer-tab dropdown pull-right nav-dropdown">
                <button  className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Post<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><Link className="list-product-btn" to={`/postItem`} >Post A Product</Link></li>
                    <li><Link className="place-request-btn" to={`/postRequest`} >Post a Request</Link></li>
                </ul>
            </div>

        </div> 


        );
    }
}


export default Header;