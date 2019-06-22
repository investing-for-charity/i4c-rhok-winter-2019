import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './cause.css';

export class Cause extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-cause--focus' : '';
        return (

            <div className={`c-cause ${containerClasses}`}>
                <div className="g-flex__container">
                    <div className="g-flex__item">
                        {/* <span className="c-calculator__number">2</span> */}
                        <Label circular color="green" key="step-1">2</Label>
                    </div>
                    <div className="g-flex__item">
                        <h3>Cause</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cause;
