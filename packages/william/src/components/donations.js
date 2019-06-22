import React, { Component } from 'react';
import { Input, Label } from 'semantic-ui-react'

import './donations.css';

export class Donations extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-donation--unfocus' : '';

        return (
            <div className={`c-donations g-padding-left--2 ${containerClasses}`}>
                <div className="g-flex__container">
                    <div className="g-flex__item">
                        {/* <span className="c-calculator__number">1</span> */}
                        <Label circular color="grey" key="step-1">1</Label>
                    </div>
                    <div className="g-flex__item g-padding-left--1">
                        <h3>How much can you donate?</h3>
                    </div>
                </div>
                {/* <label>How much can you donate?
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                </label> */}
                <div className="g-padding-top--1 g-padding-left--2">
                    <Input labelPosition='right' type='text' placeholder='Amount'>
                        <Label basic>$</Label>
                        <input value={this.props.value} onChange={this.props.handleChange} />
                        <Label>.00</Label>
                    </Input>
                </div>
            </div>
        )
    }
}

export default Donations;
