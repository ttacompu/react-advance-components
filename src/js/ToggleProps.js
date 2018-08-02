import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

class Toggle extends Component{

    state = { on : false};
    toggle = () => 
        this.setState( 
            ({on}) =>({on: !on}),
            () => this.props.onToggle(this.state.on)
         )
    getStateAndHelper(){
        return {
            on : this.state.on,
            toggle : this.toggle,
            togglerProps : {
                onClick : this.toggle,
                'aria-pressed' : this.state.on
            }
        }
    }

    render(){
        return this.props.children(this.getStateAndHelper());
    }

}

const Usage = ({onToggle = (...args) => console.log('onToggle', ...args), }) =>(
    <Toggle onToggle={onToggle}>
    {
        ({on, togglerProps}) =>
        {
            const status =  on ? "on" : "off";
            return(
                <div>
                    {`Button is ${status} `}
                    <Switch on={on} {...togglerProps} />
                    <button aria-label="custom-button" {...togglerProps}>
                            {`${status}`}
                    </button>
                </div>)            
        }
    }
    </Toggle>
)


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