import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

const ToggleContext = React.createContext()

class Toggle extends Component{
    static On = ({children})=>(
        <ToggleContext.Consumer>
            { contextValue => contextValue.on ? children : null }
        </ToggleContext.Consumer>
    )

    static Off = ({children})=>(
        <ToggleContext.Consumer>
            { contextValue => contextValue.on ? null : children }
        </ToggleContext.Consumer>
    )

    static Button = (props)=>(
        <ToggleContext.Consumer>
            { contextValue => (<Switch on={contextValue.on} onClick={contextValue.toggle} {...props} />) }
        </ToggleContext.Consumer>
    )
    
    state = { on : true};
    toggle = () => this.setState( ({on}) =>({on : !on}), 
        () => this.props.onToggle(this.state.on) )
    constructor(props){
        super(props);
    }

    render ( ){
        return (
            <ToggleContext.Provider value={{on : this.state.on, toggle : this.toggle }}>
                    {this.props.children}
            </ToggleContext.Provider>
        )
    }
}

const Usage = ({onToggle = (...args) => console.log('onToggle', ...args), }) =>{
    return (
        <Toggle onToggle={onToggle} >
            <Toggle.Off>Button is off</Toggle.Off>
            <Toggle.On>Button is on</Toggle.On>
            <div>
                <Toggle.Button />
            </div>
            
        </Toggle >
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