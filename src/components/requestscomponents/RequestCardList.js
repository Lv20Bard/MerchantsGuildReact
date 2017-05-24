import React, { Component } from 'react';
import RequestCard from './RequestCard.js';
// import axios from 'axios';

export default class RequestCardList extends Component{
      
      constructor(props){
            super(props);


            this.state = {
                  requests:[{
                        _id:"123",
                        name:"Ormas GreatShield",
                        budget:"200"
                  }]
            }


      }
      
      //Get the list of Store Items 
      componentDidMount(){
            // axios.get(`http://localhost:3001/items`)
            // .then((res) =>{
            //       console.log(res);
            //       this.setState({storeItems: res.data.data})
            // })
            // .catch((err) =>{
            //       console.log(err);
            // });
      }

      render(){
            var requestList = this.state.requests.map((theRequest) => {
                  return(
                        <div>
                             <RequestCard data={theRequest} key={theRequest._id} /> 
                        </div>
                  )
            });

            return(
                  <div>
                        {requestList}
                  </div>
            )

      }
}