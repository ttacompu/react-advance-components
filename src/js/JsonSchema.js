import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from 'react-jsonschema-form'
import './transition.css'
import { Motion, spring } from 'react-motion';
import radium from 'radium';

const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', default: 'Dan' },
        lastName: { type: 'string', default: 'Abramov' },
    },
}

const Transition = () => (
    <Motion
        defaultStyle={{ opacity: 0.01 }}
        style={{ opacity: spring(1) }}
    >
        {interpolatingStyle => (
            <h1 style={interpolatingStyle}>Hello React</h1>
        )}
    </Motion>

)

const styles = {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    ':hover': {
        color: '#fff',
    }
}

class FontSize extends React.Component {
    handleChange({ target }) {
        this.setState({ value: Number(target.value) });
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 16,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{ fontSize: this.state.value }}></input>
        )
    }
}

const Button = () =>{
    return (<button style={styles}>Click</button>)
}
const CustomButton = radium(Button);



class JSONSchemaForm extends React.Component {
    handleSubmit({ formData }) {
        console.log(formData)
    }

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <div>
                <Form schema={schema} onSubmit={this.handleSubmit} />
                <Transition></Transition>
                <FontSize />
                <CustomButton />

            </div>
        )
    }

}

ReactDOM.render(<JSONSchemaForm />, document.getElementById("root"))






