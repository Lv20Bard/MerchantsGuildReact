import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';

import Store from './components/storecomponents/store';
import Requests from './components/requestscomponents/requests';

import ItemPage from './components/storecomponents/ItemPage';
import RequestPage from './components/requestscomponents/RequestPage'

import PostItem from './components/storecomponents/PostItem';
import PostRequest from './components/requestscomponents/PostRequest'

class Routes extends Component {
    render(){
        return(
           <BrowserRouter>
                <div>
                    <Route path="/" component={App} />

                    <Route exact path="/store" component={Store}/>
                    <Route exact path="/requests" component={Requests}/>

                    <Route path="/store/:id" component={ItemPage}/>
                    <Route path="/requests/:id" component={RequestPage} />

                    <Route path="/postItem" component={PostItem}/>
                    <Route path="/postRequest" component={PostRequest}/>

                    



                </div>
           </BrowserRouter>
        )
    }
}

export default Routes;