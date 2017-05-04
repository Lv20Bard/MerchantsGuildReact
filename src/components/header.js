import React, { Component } from 'react';

class Header extends Component {
    
    render(){
        return(
        <div className="nav-bar">

            <div id="brand" className=""><span className="hideSmall logo-text text-center">The Merchants Guild</span></div>


            <div id="profile-tab"  className="dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="hideSmall">Profile&nbsp;</span><i class="nav-text fa fa-user-circle-o" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a id="view-profile-btn" href="#/profile/{{currentUser.$id}}">View Profile</a></li>
                    <li><a id="logout-btn" >Logout</a></li>
                </ul>
            </div>


            <div id="profile-tab"  className="dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="hideSmall">Login&nbsp;</span><i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a id="facebook-login-dropdown-btn" >Login With Facebook</a></li>
                    <li><a id="google-login-dropdown-btn" >Login With Google</a></li>
                </ul>
            </div>




            <div id="seller-tab" className="dropdown pull-right nav-dropdown">
                <button className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a id="browse-request-btn" href="#/requests">Browse Requests</a></li>
                    <li><a id="browse-items-btn" href="#/store">Browse Items</a></li>	
                </ul>
            </div>


            <div id="buyer-tab" className="dropdown pull-right nav-dropdown">
                <button  className="nav-dropdown nav-text" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Post<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dLabel">
                    <li><a id="list-product-btn" href="#/postitem">Post A Product</a></li>
                    <li><a id="place-request-btn" href="#/postrequest">Post a Request</a></li>
                </ul>
            </div>

        </div> 


        );
    }
}


export default Header;