import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

const callAll = (...fns) =>(...args) =>
    fns.forEach(fn => fn && fn(...args))

class Toggle extends Component{

    static defaultProps = {
        initialOn: true,
        onReset: () => {}
      }

      initialState = {on: this.props.initialOn}
      state = this.initialState;

      toggle = () => 
        this.setState( 
            ({on}) =>({on: !on}),
            () => 
            this.props.onToggle(this.state.on)
         )

    reset = () =>
         this.setState(this.initialState, () => 
         this.props.onReset("Reset happen!!!"))

    getStateAndHelper(){
        return {
            on : this.state.on,
            toggle : this.toggle,
            reset : this.reset,
            getTogglerProps:  this.getTogglerProps
        }
    }

    getTogglerProps =( {onClick, ...props})=>(
    {
                onClick : callAll(onClick, this.toggle),
                ...props
    })

     render(){
            return this.props.children(this.getStateAndHelper());
    }

}

class Usage extends Component{
    static defaultProps ={
        onToggle : (...args) => console.log('onToggle', ...args),
        onReset : (...args) => console.log('onReset', ...args),
        onButtonClick : () => console.log("You press button to toggle")
    }

    constructor(){
        super();
    }

    render(){
            return  (
                <Toggle  onToggle={this.props.onToggle} onReset={this.props.onReset}>
                {
                    ({on, reset, getTogglerProps}) =>  {
                        return(
                            <div>
                                <Switch {...getTogglerProps({on})}  />

                                 <button  onClick = {reset}>
                                        reset
                                </button>
                            </div>) 
                    }  
                }
                </Toggle>
            )

    }
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