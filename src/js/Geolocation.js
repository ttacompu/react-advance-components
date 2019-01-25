import React, { Component } from "react";


export class Geolocation extends Component{
    onGetCoordinate = ({coords}) =>{
            this.setState({lat : coords.latitude, long : coords.longitude});
    }
    constructor(props){
        super(props);
        this.state ={
            lat : null,
            long : null
        }
        this.onGetCoordinate.bind(this);
    }

    componentDidMount(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.onGetCoordinate);
            }
    }

    render(){
        return `${this.state.lat} / ${this.state.long}`
    }
        

}