import React, { Component } from "react";
// import Board from "./Board";

/** Simple app that just shows the LightsOut game. */

class Box extends Component {
    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }} />
                <button onClick={this.props.removeBox}>X</button>
            </div>
        );
    }
}

export default Box;
