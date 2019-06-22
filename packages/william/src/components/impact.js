import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './impact.css';

export class Impact extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-impact--focus' : '';

        return (
            <div className={`c-impact ${containerClasses}`}>
                <div className="g-flex__container">
                    <div className="g-flex__item">
                        {/* <span className="c-calculator__number">3</span> */}
                        <Label circular color="grey" key="step-1">3</Label>
                    </div>
                    <div className="g-flex__item g-padding-left--1">
                        <h3>Your donation will pay for</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Impact;
