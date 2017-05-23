import React, { Component } from 'react';
import CardList from './CardList';

class Store extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }




    render(){
        return(
            <div className="main-content-wrapper">
                
                <CardList />
            </div>
        );
    }

}

export default Store;