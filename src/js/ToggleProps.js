import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Switch} from './Switch'
import "./app.css";

const callAll = (...fns) =>(...args) =>
    fns.forEach(fn => fn && fn(...args))
class Toggle extends Component{

    static defaultProps ={
        initOn : false,
        reset : () =>{}
    }
    initState ={ on : this.props.initOn};
    state = this.initState;

    toggle = () => 
        this.setState( 
            ({on}) =>({on: !on}),
            () => 
            this.props.onToggle(this.state.on)
         )

    reset = () =>
         this.setState(this.initState, () => 
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

const Usage = ({initOn=true, onToggle = (...args) => console.log('onToggle', ...args),
onReset = (...args) => console.log('onReset', ...args),
onButtonClick = () => console.log("Button is clicked!")

}) =>(
    <Toggle initOn={initOn} onToggle={onToggle} onReset={onReset}>
    {
        ({on, reset, getTogglerProps}) =>
        {
            const status =  on ? "on" : "off";
            const commandStatus =  on ? "off" : "on";
            return(
                <div>
                    {`Button is ${status} `}
                    <Switch {...getTogglerProps({on})}  />
                    < button 
                    {...getTogglerProps({
                        'arial-label' : 'custom-button',
                        id : 'id1',
                        onClick : onButtonClick
                    })} >
                            {`${commandStatus}`}
                    </button>

                     <button  onClick = {reset}>
                            reset
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