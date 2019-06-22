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
                        <Label circular color="green" key="step-1">3</Label>
                    </div>
                    <div className="g-flex__item">
                        <h3>Impact</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Impact;
