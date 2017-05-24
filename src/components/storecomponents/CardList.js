import React, { Component } from 'react';
import StoreCard from './StoreCard';
import axios from 'axios';

export default class CardList extends Component{
      // static propTypes={
      //       onItemPosted: React.PropTypes.func.isRequired
      // }
      
      constructor(props){
            super(props);


            this.state = {
                  storeItems:[]
            }


      }
      
      //Get the list of Store Items 
      componentDidMount(){
            axios.get(`http://localhost:3001/items`)
            .then((res) =>{
                  console.log(res);
                  this.setState({storeItems: res.data.data})
            })
            .catch((err) =>{
                  console.log(err);
            });
      }

      render(){
            var storeCatalog = this.state.storeItems.map((theStoreItem) => {
                  return(
                        <div>
                             <StoreCard data={theStoreItem} key={theStoreItem._id} /> 
                        </div>
                  )
            });

            return(
                  <div>
                        {storeCatalog}
                  </div>
            )

      }
}