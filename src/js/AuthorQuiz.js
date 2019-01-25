import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import {Geolocation}     from './Geolocation';

const Button = ({ children }) => (
    <button>
        {children}
    </button>)

Button.PropTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

class Price extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<span>{` (${this.props.currency}${this.props.value})`}</span>)
    }
}

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    clickHandler() {
        this.setState({ posts: [{ id: 1, name: 'tta', currency: '$', value: '111' }, { id: 2, name: 'ttk', currency: '$', value: '222' }] })

    }

    componentDidMount() {
        this.setState({ posts: [{ id: 1, name: 'tta', currency: '$', value: '3323' }, { id: 2, name: 'ttk', currency: '#', value: '252' }] })
    }

    render() {
        console.log(this.state.posts);
        return (
            <div>
                <ul>
                    {
                        this.state.posts.map(post => (
                            <li key={post.id}> {post.name}
                                <Price currency={post.currency} value={post.value} />
                            </li>

                        ))
                    }
                </ul>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                <Button>
                    <img src="" alt="" />  
                    <span>Click me!</span>
                </Button>
               <Geolocation />
            </div>
        )
    }

}

ReactDOM.render(<PostList />, document.getElementById("root"))