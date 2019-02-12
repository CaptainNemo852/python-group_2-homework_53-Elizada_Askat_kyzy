import React, { Component } from 'react';
import './random.css'


class Random extends Component {
    render() {
        return (
           <p className="circle">{this.props.number}</p>
        );
    };
}


export default Random;