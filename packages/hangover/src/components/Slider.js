import React, { Component } from 'react';
import styled from 'styled-components';

class Slider extends Component {

    handleChange = (event) => {
        this.props.handleDistributionChange(event.target.value);
    }

    render() {
        const {distribution} = this.props
        return (
            <div className="slider">
                <label 
                    for="slider" 
                    style={{
                        marginLeft: `${distribution > 12 ? 330/100 * distribution : 24 + Number(distribution)}px`
                    }}
                >
                    <span>{this.props.distribution}%</span>
                </label>
                <input 
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.distribution}
                    max-value={100}
                    min={4}
                />
            </div>
         );
    }
}

export default Slider;