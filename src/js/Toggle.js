import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

class Toggle extends Component{
    state = { on : true};
    toggle = () => this.setState( ({on}) =>({on : !on}), 
        () => this.props.onToggle(this.state.on) )
    constructor(props){
        super(props);
    }

    render ( ){
        return (<Switch on={this.state.on} onClick={this.toggle} />);
    }
}

const Usage = ({onToggle = (...args) => console.log('onToggle', ...args), }) =>{
    return (
        <Toggle onToggle={onToggle} />
    )
} 

ReactDOM.render(
    <div  style={{
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
        <Usage />
    </div>
,
 document.getElementById("appContainer"))