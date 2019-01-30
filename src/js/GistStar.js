import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-refetch';

const token = 'access_token=4c5d7cc1706c8907e5e622d1182162b2a9aa6262 ';

const connectWithStar = connect(({ id }) => ({
    star: () => ({
        starResponse: {
            url: `https://api.github.com/gists/${id}/star?${token}`,
            method: 'PUT'
        }
    })
}))

const Gist = ({ description, star }) => (
    <li>
        {description}
        <button onClick={star}>+1</button>
    </li>
)

const GistStar = connectWithStar(Gist);

ReactDOM.render(<GistStar id="taung" />, document.getElementById("root"))