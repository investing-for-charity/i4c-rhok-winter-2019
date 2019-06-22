import React, { Component } from 'react';
import styled from 'styled-components';

class Slider extends Component {

    handleChange = (event) => {
        this.props.handleDistributionChange(event.target.value);
    }

    render() {
        return (
            <input 
                type="range"
                onChange={this.handleChange}
                value={this.props.distribution}
                max-value={100}
            />

         );
    }
}

export default Slider;