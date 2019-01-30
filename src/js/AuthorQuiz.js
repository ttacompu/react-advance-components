import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { Geolocation } from './Geolocation';

const Buttons  = ({onIncrement, onDecrement}) =>(
            <div>
                <button onClick ={onIncrement} >Increase</button>
                <button onClick ={onDecrement} >Decrease</button>
            </div>
)

const Display = ({counter}) => (<div>{counter}</div>)

export class Count extends Component {
    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    constructor(props) {
        super(props);
        this.state = { counter: 0 }
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    render() {
        return (
            <div>
                <Display counter={this.state.counter} />
                <Buttons onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}></Buttons>
            </div>
        )
    }
}

ReactDOM.render(<Count />, document.getElementById("root"))