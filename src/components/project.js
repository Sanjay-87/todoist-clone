import React, { Component } from "react";

class Project extends Component {
    state = {};

    render() {
        return <h1>{this.props.match.params.title}</h1>;
    }
}

export default Project;
