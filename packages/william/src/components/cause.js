import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './cause.css';

export class Cause extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-cause--focus' : '';
        const charityNotSelected = this.props.charitySelected ? 'c-cause__images--unfocused' : '';
        const charitySelected = this.props.charitySelected ? 'c-cause--selected' : '';
        return (

            <div className={`c-cause g-padding-left--2 ${containerClasses} ${charitySelected}`}>
                <div className="g-flex__container">
                    <div className="g-flex__item">
                        {/* <span className="c-calculator__number">2</span> */}
                        <Label circular color="grey" key="step-1">2</Label>
                    </div>
                    <div className="g-flex__item g-padding-left--1">
                        <h3>Select one or more charities</h3>
                    </div>
                    <div>
                        <ul className="g-flex__container">
                            <li className="g-flex__item"><button onClick={this.props.handleChange}><img className="c-cause__image" src={require('../images/charity1.png')} alt="Refugees in Australia" /></button></li>
                            <li className="g-flex__item"><button onClick={this.props.handleChange}><img className={`c-cause__image ${charityNotSelected}`} src={require('../images/charity2.png')} alt="Refugees in Australia" /></button></li>
                            <li className="g-flex__item"><button onClick={this.props.handleChange}><img className={`c-cause__image ${charityNotSelected}`} src={require('../images/charity3.png')} alt="Refugees in Australia" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cause;
