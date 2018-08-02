import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

const ToggleContext = React.createContext();
const ToggleConsumer = (props) =>{ 
return (<ToggleContext.Consumer>
    {
        context =>{
            if(!context){
                throw new Error('Toggle compount compoents must be rendered within the Toggle context');
            }
            return props.children(context)
        } 
    }
</ToggleContext.Consumer>)
}

class Toggle extends Component{
    static On = ({children})=>(
        <ToggleConsumer>
            { contextValue => contextValue.on ? children : null }
        </ToggleConsumer>
    )

    static Off = ({children})=>(
        <ToggleConsumer>
            { contextValue => contextValue.on ? null : children }
        </ToggleConsumer>
    )

    static Button = (props)=>(
        <ToggleConsumer>
            { contextValue => (<Switch on={contextValue.on} onClick={contextValue.toggle} {...props} />) }
        </ToggleConsumer>
    )
    

    toggle = () => this.setState( ({on}) =>({on : !on}), 
        () => this.props.onToggle(this.state.on) )

    state = { on : false, toggle : this.toggle};

    constructor(props){
        super(props);
    }

    render ( ){
        return (
            <ToggleContext.Provider value={this.state}>
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
            
        </Toggle>
    )
} 

Usage.title = "Render Props"

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