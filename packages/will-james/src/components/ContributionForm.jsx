import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import InputRange from "react-input-range";
import causeData from "../data/causeInfo.json";

import underPrivilegedYouthLogo from "../assets/underprivileged-youth.png";
import refugeesInAustraliaLogo from "../assets/refugees-in-australia.png";
import childSlaveryLogo from "../assets/child-slavery.png";
import mentalHealthLogo from "../assets/mental-health.png";
import womanDomesticViolenceLogo from "../assets/women-domestic-violence.png";
import globalPovertyLogo from "../assets/global-poverty.png";
import youthAtRiskLogo from "../assets/youth-at-risk.png";
import socialEnterpriseLogo from "../assets/social-enterprise.png";

class ContributionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: underPrivilegedYouthLogo,
      fundTotal: "",
      causeSupported: "",
      contributionPercentage: "",
      contributionAmount: "",
      data: causeData,
      fundBoundaries: {
        minAmount: 2000,
        maxAmount: 15000
      },
      contributionBoundaries: {
        minAmount: 4,
        maxAmount: 20
      },
      selectedCharityData: {
        causeName: "",
        charityName: "",
        thousandAchieves: {
          achieve1: {
            achieveName: "",
            achieveAmount: null
          },
          achieve2: {
            achieveName: "",
            achieveAmount: null
          },
          achieve3: {
            achieveName: "",
            achieveAmount: null
          },
          postTxt: ""
        }
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
    var cause = causeData.causes.underPrivilegedYouth.causeName;

    this.setState({
      fundTotal: total,
      contributionPercentage: contribution,
      causeSupported: cause,
      selectedCharityData: causeData.causes.underPrivilegedYouth
    });
  }

  componentDidUpdate() {}

  render() {
    var simulator = this;
    var fundTotal = this.state.fundTotal;
    var fundTotalAsFloat = parseFloat(fundTotal);
    var contributionPercentage = parseFloat(this.state.contributionPercentage);
    var contributionPercentageAsDecimal = contributionPercentage / 100;
    var contributionAmount = (
      fundTotalAsFloat * contributionPercentageAsDecimal
    ).toFixed(2);
    var thousandAchieves = this.state.selectedCharityData.thousandAchieves;

    function numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function calculateImpact(impactPerThousand) {
      return impactPerThousand !== null
        ? Math.floor((contributionAmount / 1000) * impactPerThousand)
        : "";
    }

    let logo = underPrivilegedYouthLogo;

    function changeCharityInfo(causeName) {
      var data = causeData.causes;
      simulator.setState({ causeSupported: causeName });

      switch (causeName) {
        case data.underPrivilegedYouth.causeName:
          simulator.setState({ logo: underPrivilegedYouthLogo });
          simulator.setState({
            selectedCharityData: data.underPrivilegedYouth
          });
          break;
        case data.refugeesInAustralia.causeName:
          simulator.setState({ logo: refugeesInAustraliaLogo });
          simulator.setState({ selectedCharityData: data.refugeesInAustralia });
          break;
        case data.childSlavery.causeName:
          simulator.setState({ logo: childSlaveryLogo });
          simulator.setState({ selectedCharityData: data.childSlavery });
          break;
        case data.womanDomesticViolence.causeName:
          simulator.setState({ logo: womanDomesticViolenceLogo });
          simulator.setState({
            selectedCharityData: data.womanDomesticViolence
          });
          break;
        case data.globalPoverty.causeName:
          simulator.setState({ logo: globalPovertyLogo });
          simulator.setState({ selectedCharityData: data.globalPoverty });
          break;
        case data.youthAtRisk.causeName:
          simulator.setState({ logo: youthAtRiskLogo });
          simulator.setState({ selectedCharityData: data.youthAtRisk });
          break;
        case data.socialEnterprise.causeName:
          simulator.setState({ logo: socialEnterpriseLogo });
          simulator.setState({ selectedCharityData: data.socialEnterprise });
          break;
        case data.mentalHealth.causeName:
          simulator.setState({ logo: mentalHealthLogo });
          simulator.setState({ selectedCharityData: data.mentalHealth });
          break;
      }
    }

    return (
      <div className="simulator-container">
        <section className="simulator-form">
          <div className="contribution-form">
            <div className="form-group">
              <h1>
                <label htmlFor="contribution-cause">Select Cause:</label>
              </h1>
              <select
                id="contribution-cause"
                className="custom-select"
                value={this.state.causeSupported}
                onChange={x => changeCharityInfo(x.target.value)}
              >
                <option
                  value={this.state.data.causes.underPrivilegedYouth.causeName}
                >
                  {this.state.data.causes.underPrivilegedYouth.causeName}
                </option>
                <option
                  value={this.state.data.causes.refugeesInAustralia.causeName}
                >
                  {this.state.data.causes.refugeesInAustralia.causeName}
                </option>
                <option value={this.state.data.causes.childSlavery.causeName}>
                  {this.state.data.causes.childSlavery.causeName}
                </option>
                <option value={this.state.data.causes.mentalHealth.causeName}>
                  {this.state.data.causes.mentalHealth.causeName}
                </option>
                <option
                  value={this.state.data.causes.womanDomesticViolence.causeName}
                >
                  {this.state.data.causes.womanDomesticViolence.causeName}
                </option>
                <option value={this.state.data.causes.globalPoverty.causeName}>
                  {this.state.data.causes.globalPoverty.causeName}
                </option>
                <option value={this.state.data.causes.youthAtRisk.causeName}>
                  {this.state.data.causes.youthAtRisk.causeName}
                </option>
                <option
                  value={this.state.data.causes.socialEnterprise.causeName}
                >
                  {this.state.data.causes.socialEnterprise.causeName}
                </option>
              </select>
            </div>
            <div className="contribution-results">
              <div id="achieve-charity">
                <h3>we have determined the most effective charity to be</h3>
                <h1>{this.state.selectedCharityData.charityName}</h1>
              </div>
              <img class="cause-logo" src={this.state.logo} alt="cause-logo" />
            </div>
            <div className="contribution">
              <div className="form-group">
                <h1>
                  <label htmlFor="fund-total-display" className="input-label">
                    Your Starting Balance
                  </label>
                </h1>
                <div className="input-group" id="fund-total">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <input
                    className="form-input numbersonly"
                    id="fund-total-display"
                    min="500"
                    defaultValue={numberWithCommas(fundTotal)}
                    onChange={x => this.setState({ fundTotal: x.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <h1>Your Contribution is</h1>
                <h2 className="form-input-group">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <span id="contribution-result">
                    {numberWithCommas(contributionAmount)}
                  </span>
                </h2>
              </div>
              <div className="form-group">
                <h1>
                  <label
                    id="contribution-percentage-label"
                    className="input-label"
                  >
                    Annual Distribution Percentage
                  </label>
                </h1>
                <InputRange
                  id="contribution-percentage-input"
                  aria-labelledby="contribution-percentage-label"
                  className="form-input-group"
                  formatLabel={value => value.toFixed(1) + "%"}
                  maxValue={25}
                  minValue={4}
                  value={contributionPercentage}
                  step={0.1}
                  onChange={value =>
                    this.setState({ contributionPercentage: value })
                  }
                />
              </div>
            </div>
            <span>change your annual distribution percentage to adjust</span>
          </div>
        </section>
        <section className="simulator">
          <div id="impact-intro">
            <h3>With your contribution </h3>
            <h1>{this.state.selectedCharityData.charityName} </h1>
            <h3>can achieve</h3>
          </div>
          <div id="achieve-impact-group">
            <div className="impact-group" id="achieve-1">
              <h1 id="achieve-1-value">
                {calculateImpact(thousandAchieves.achieve1.achieveAmount)}
              </h1>
              <h3> {thousandAchieves.achieve1.achieveName}</h3>
            </div>
            <div className="impact-group" id="achieve-2">
              <h1 id="achieve-2-value">
                {calculateImpact(thousandAchieves.achieve2.achieveAmount)}
              </h1>
              <h3> {thousandAchieves.achieve2.achieveName}</h3>
            </div>
            <div className="impact-group" id="achieve-3">
              <h1 id="achieve-3-value">
                {calculateImpact(thousandAchieves.achieve3.achieveAmount)}
              </h1>
              <h3> {thousandAchieves.achieve3.achieveName}</h3>
            </div>
          </div>
          <h3 id="post-text">{thousandAchieves.postTxt}</h3>
        </section>
      </div>
    );
  }
}

export default ContributionForm;
