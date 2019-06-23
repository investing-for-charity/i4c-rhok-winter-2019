import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './cause.css';

export class Cause extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-cause--focus' : '';
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
                    <div className="g-flex__item">
                        <ul className="g-flex__container">
                            <li className="g-flex__item">
                                <span className="c-cause__title">Refugees in Australia</span>
                                {
                                    this.props.stfrancis &&
                                    <div className="c-cause__tick"></div>
                                }
                                <button className="g-margin-top--05 g-margin-bottom--1" onClick={this.props.handleChangeStfrancis}><img className={`c-cause__image`} src={require('../images/charity1.png')} alt="Refugees in Australia" /></button>
                                <a href="#">Read More</a>
                            </li>
                            <li className="g-flex__item">
                                <span className="c-cause__title">Youth at Risk</span>
                                {
                                    this.props.streetwork &&
                                    <div className="c-cause__tick"></div>
                                }
                                <button className="g-margin-top--05 g-margin-bottom--1" onClick={this.props.handleChangeStreetwork}><img className={`c-cause__image`} src={require('../images/charity2.png')} alt="Refugees in Australia" /></button>
                                <a href="#">Read More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cause;
