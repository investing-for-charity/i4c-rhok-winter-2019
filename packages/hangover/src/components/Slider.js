import React, { Component } from 'react';
import styled from 'styled-components';

const SliderInput = styled.input`
  appearance: none;
  height: 15px;
  background-color: green;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  transition: all 0.3s ease;
  &::-webkit-slider-thumb {
  appearance: none !important  ;
  width: 20px;
  height: 20px;
  background-color: red;
  &::before {
    content:'1';
    display: block;
    width: 20px;
    height: 20px;
    color: red;
  }
  }
`

class Slider extends Component {

    handleChange = (event) => {
        this.props.handleDistributionChange(event.target.value);
    }
    
    render() { 
        return ( 
            <SliderInput 
                type="range" 
                onChange={this.handleChange}
                value={this.props.distribution} 
                max-value={100}
            />

         );
    }
}
 
export default Slider;