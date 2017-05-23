import React, { Component } from 'react';
import CardList from './RequestCardList';

class Requests extends Component {
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

export default Requests;