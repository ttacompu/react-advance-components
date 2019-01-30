import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-refetch';

const connectWithGists = connect(({ username }) => ({
    gists: `https://api.github.com/users/${username}/gists`,
}))

const List = ({ gists }) => (
    gists.fulfilled && (
        <ul>
            {gists.value.map(gist => (
                <li key={gist.id}>{gist.description}</li>
            ))}
        </ul>
    )
)

const Gist = connectWithGists(List);

ReactDOM.render(<Gist username="gaearon" />, document.getElementById("root"))






