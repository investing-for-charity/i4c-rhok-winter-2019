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
                <input
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.distribution}
                    max-value={100}
                    min={4}
                />
                <label for="slider">
                    <span
                        style={{
                            left: `${distribution > 12 ? 330/100 * distribution : 24 + Number(distribution)}px`
                        }}
                    >
                        {this.props.distribution}%
                    </span>
                </label>
            </div>
         );
    }
}

export default Slider;