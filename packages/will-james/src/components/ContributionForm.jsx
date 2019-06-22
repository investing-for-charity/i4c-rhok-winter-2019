import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import InputRange from "react-input-range";

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundTotal: "",
      contributionPercentage: "",
      fundBoundaries: {
        minAmount: 500000,
        maxAmount: 1000000
      },
      contributionBoundaries: {
        minAmount: 1.1,
        maxAmount: 7.6
      }
    };
  }

  componentDidMount() {
    const MIN_FUND_AMOUNT = this.state.fundBoundaries.minAmount;
    const MAX_FUND_AMOUNT = this.state.fundBoundaries.maxAmount;
    const MIN_CONTRIBUTION_AMOUNT = this.state.contributionBoundaries.minAmount;
    const MAX_CONTRIBUTION_AMOUNT = this.state.contributionBoundaries.maxAmount;

    function getRandomFundTotal(max) {
      return (Math.random() * max + MIN_FUND_AMOUNT).toFixed(2);
    }

    function getRandomcontributionPercentage(max) {
      return Math.random() * max + MIN_CONTRIBUTION_AMOUNT;
    }

    var total = getRandomFundTotal(MAX_FUND_AMOUNT);
    var contribution = getRandomcontributionPercentage(MAX_CONTRIBUTION_AMOUNT);
    this.setState({ fundTotal: total, contributionPercentage: contribution });
  }

  render() {
    var fundTotal = this.state.fundTotal;
    var fundTotalAsFloat = parseFloat(fundTotal);
    var contributionPercentage = parseFloat(this.state.contributionPercentage);
    var contributionPercentageAsDecimal = contributionPercentage / 100;
    var contributionAmount = (
      fundTotalAsFloat * contributionPercentageAsDecimal
    ).toFixed(2);

    function numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <section className="simulator-form">
        <div className="contribution-form">
          <div className="form-group">
            <h1>
              <label htmlFor="fund-total-display" className="input-label">
                Your Balance
              </label>
            </h1>
            <div className="input-group" id="fund-total">
              <FontAwesomeIcon icon={faDollarSign} />
              <input
                className="form-input"
                id="fund-total-display"
                defaultValue={numberWithCommas(fundTotal)}
                onChange={x => this.setState({ fundTotal: x.target.value })}
              />
            </div>
          </div>
          <div className="form-group">
            <h1>
              <label id="contribution-percentage-label" className="input-label">
                Contribution Percentage
              </label>
            </h1>
            <InputRange
              id="contribution-percentage-input"
              aria-labelledby="contribution-percentage-label"
              formatLabel={value => value.toFixed(1) + "%"}
              maxValue={10}
              minValue={0.1}
              value={contributionPercentage}
              step={0.1}
              onChange={value =>
                this.setState({ contributionPercentage: value })
              }
            />
          </div>
        </div>
        <div className="contribution-results">
          <div className="form-group">
            <h1>Your Contribution</h1>
            <span>change your contribution percentage to adjust</span>
            <h2>
              <FontAwesomeIcon icon={faDollarSign} />
              <span id="contribution-result">
                {numberWithCommas(contributionAmount)}
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default ContributionForm;
