import React, { Component } from 'react';

class DonationBox extends Component {
    constructor(props) {
        super(props);
        this.state = { donation: null }
    }
    handleChange = (event) => {
        this.props.handleDonationChange(event.target.value)
    }

    render() {
        return (
            <div className="donation">
                <input
                    id="donation"
                    onChange={this.handleChange}
                    type="number"
                    value={this.props.donation}
                />
                <label for="donation">$</label>
            </div>
         );
    }
}

export default DonationBox;