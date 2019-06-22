import React, { Component } from 'react';
import { Input, Label } from 'semantic-ui-react'

import './donations.css';

export class Donations extends Component {
    render() {
        return (
            <div className="c-donations">
                <div className="g-flex__container">
                    <div className="g-flex__item">
                        {/* <span className="c-calculator__number">1</span> */}
                        <Label circular color="green" key="step-1">1</Label>
                    </div>
                    <div className="g-flex__item">
                        <h3>Donation</h3>
                    </div>
                </div>
                {/* <label>How much can you donate?
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                </label> */}
                <Input labelPosition='right' type='text' placeholder='Amount'>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                </Input>
            </div>
        )
    }
}

export default Donations;
