import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyForm extends Component{
    handleChanged = ({target}) =>{
        this.setState({[target.name] : target.value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`${this.state.First}-${this.state.Last}`);
    }

    constructor(props){
        super(props);

        this.state = { First : '', Last : ''};

        this.handleChanged.bind(this);
        this.handleSubmit.bind(this);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>{this.state.First} {this.state.Last}</div>
                <input type="text" name="First" onChange={this.handleChanged}></input>
                <input type="text" name="Last" onChange={this.handleChanged}></input>
                <button type="submit">Submit</button>
            </form>
        )
    }

}

ReactDOM.render(<MyForm />, document.getElementById("root"))