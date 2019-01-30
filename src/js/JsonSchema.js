import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from 'react-jsonschema-form'

const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', default: 'Dan' },
        lastName: { type: 'string', default: 'Abramov' },
    },
}



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
            <Form schema={schema} onSubmit={this.handleSubmit} />
        )
    }

}

ReactDOM.render(<JSONSchemaForm />, document.getElementById("root"))






