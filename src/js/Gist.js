import React, { Component } from "react";
import ReactDOM from "react-dom";

const withData = url => Component => (
    class extends React.Component {
  
      constructor(props) {
        super(props)
  
        this.state = { data: [] }
      }
  
      componentDidMount() {
        const endpoint = typeof url === 'function' ? url(this.props) : url
  
        fetch(endpoint)
          .then(response => response.json())
          .then(data => this.setState({ data }))
      }
  
      render() {
        return <Component {...this.props} {...this.state} />
      }
    }
  )

const List = ({ data }) => (
    <ul>
      {data.map(gist => (
        <li key={gist.id}>{gist.description}</li>
      ))}
    </ul>
  )
  

  const withGists = withData(props => `https://api.github.com/users/${props.username}/gists`)
  const Gist = withGists(List);





ReactDOM.render(<Gist username="gaearon" />, document.getElementById("root"))