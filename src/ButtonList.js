import React, { Component } from 'react';
// import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors: ["blue", "green", "red", "black"]
    };
    constructor(props) {
        super(props);
        this.state = { color: "cyan" };
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c };
                    return <button style={colorObj} onClick={this.changeColor.bind(this, c)}>CLick here</button>;
                })}
                <h1>Binding</h1>
            </div>
        );
    }
}

export default ButtonList;
