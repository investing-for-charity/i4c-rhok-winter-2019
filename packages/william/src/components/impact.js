import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './impact.css';

const getStfrancisImpact = (donationAmount) => {
    const foodAndGroceryStampsFor1000 = 1.6;
    const safeSleepsFor1000 = 16;
    const dollarsInFinancialSupportFor1000 = 93;

    const foodAndGroceryStampsImpact = Math.floor((donationAmount / 1000) * foodAndGroceryStampsFor1000);
    const safeSleepsImpact = Math.floor((donationAmount / 1000) * safeSleepsFor1000);
    const dollarsInFinancialSupportImpact = Math.floor((donationAmount / 1000) * dollarsInFinancialSupportFor1000);

    return (
        <>
            {
                !!foodAndGroceryStampsImpact &&
                <li className="g-flex__item g-flex__container g-flex__container--align-items-center c-impact__item">
                    <img className="g-flex__item c-impact__image" src={require('../images/food.png')} alt="Food" />
                    <span className="g-flex__item g-padding-left--1">{foodAndGroceryStampsImpact} food and grocery stamps </span>
                    <div className="c-impact__item-break"><span>or</span></div>
                </li>
            }
            {
                !!safeSleepsImpact &&
                <li className="g-flex__item g-flex__container g-flex__container--align-items-center c-impact__item">
                    <img className="g-flex__item c-impact__image" src={require('../images/sleeps.png')} alt="Food" />
                    <span className="g-flex__item g-padding-left--1">{safeSleepsImpact} safe sleeps </span>
                    <div className="c-impact__item-break"><span>or</span></div>
                </li>
            }
            {
                !!dollarsInFinancialSupportImpact &&
                <li className="g-flex__item g-flex__container g-flex__container--align-items-center c-impact__item">
                    <img className="g-flex__item c-impact__image" src={require('../images/dollar.png')} alt="Food" />
                    <span className="g-flex__item g-padding-left--1">{dollarsInFinancialSupportImpact} dollars in financial support </span>
                    <div className="c-impact__item-break"><span>or</span></div>
                </li>
            }
        </>
    );
}

const getStreetworkImpact = (donationAmount) => {
    const mentorFor6MonthsFor1000 = 1;

    const mentorFor6MonthsImpact = Math.floor((donationAmount / 1000) * mentorFor6MonthsFor1000);

    return (
        <>
            {
                !!mentorFor6MonthsImpact &&
                <li className="g-flex__item g-flex__container g-flex__container--align-items-center c-impact__item">
                    <img className="g-flex__item c-impact__image" src={require('../images/mentor.png')} alt="Food" />
                    <span className="g-flex__item g-padding-left--1">{mentorFor6MonthsImpact} mentors for 6 months </span>
                    <div className="c-impact__item-break"><span>or</span></div>
                </li>
            }
        </>
    );
}


export class Impact extends Component {
    render() {
        const containerClasses = this.props.focus ? 'c-impact--focus' : '';

        return (
            <div className={`c-impact ${containerClasses}`}>
                {
                    this.props.causeSet === false &&
                    <p>Please select a charity</p>
                }
                {
                    this.props.causeSet &&
                    <>
                        <div className="g-flex__container">
                            <div className="g-flex__item">
                                {/* <span className="c-calculator__number">3</span> */}
                                <Label circular color="grey" key="step-1">3</Label>
                            </div>
                            <div className="g-flex__item g-padding-left--1">
                                <h3>Your donation will pay for</h3>
                            </div>
                        </div>
                        <div>
                            <ul className="g-flex__container g-flex__container--column g-padding-left--2 c-impact__list">
                                {
                                    this.props.donationValue &&
                                    this.props.stfrancis &&
                                    getStfrancisImpact(this.props.donationValue)
                                }
                                {
                                    this.props.donationValue &&
                                    this.props.streetwork &&
                                    getStreetworkImpact(this.props.donationValue)
                                }
                            </ul>
                            <input className="c-impact__account-button" type="submit" value="Make an Account" />
                        </div>
                    </>
                }

            </div>
        )
    }
}

export default Impact;
