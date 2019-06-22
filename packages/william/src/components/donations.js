import React, { Component } from 'react';

import './donations.css';

export class Donations extends Component {
    render() {
        return (
            <div className="c-donations">
                <label>How much can you donate?
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                </label>
            </div>
        )
    }
}

export default Donations;

