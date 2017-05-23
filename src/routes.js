import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import App from './App';
import Store from './components/storecomponents/store';
import Requests from './components/requestscomponents/requests';

class Routes extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <Route path={`/`} component={App}/>
                    
                    <Route path={`/store`} component={Store}/>
                    <Route path={`/requests`} component={Requests}/>
                    
                </div>
            </HashRouter>
        )
    }
}

export default Routes;