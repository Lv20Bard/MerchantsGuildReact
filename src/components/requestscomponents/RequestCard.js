import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export default class RequestCard extends Component{
      constructor(props){
            super(props);
      
            this.state={

            }
      }

      componnentDidMount(){
            console.log(this.props.data);
      }

      render(){
            return(
                  <div className="col-md-4 col-sm-6">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10 panel">
                              <div className="panel-header">
                                    <img /> 
                              </div>
                              <div className="panel-body item-panel col-sm-12">
                                    <h3>{this.props.data.name}</h3>
                              </div>
                              <div className="panel-footer clearfix">
                                    <h4 className="pull-left">{this.props.data.budget}</h4>
                                    <a className="btn info-btn pull-right">View</a>
                              </div>
                        </div>
                        <div className="col-sm-1"></div>
                  </div>

            );
      }
}



      
