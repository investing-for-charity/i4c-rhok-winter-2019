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
            <input 
                type="number" 
                onChange={this.handleChange} 
                value={this.props.donation}
            />
         );
    }
}
 
export default DonationBox;