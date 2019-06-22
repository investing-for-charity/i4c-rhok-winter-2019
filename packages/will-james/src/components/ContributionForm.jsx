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
      causes: {
        underPrivilagedYouth: {
          causeName: "Underprivilaged Youth",
          charityName: "Life for Koori Kids",
          thousandAchieves: {
            achieve1: {
              achieveName: "Quality Meals",
              achieveAmount: 53
            },
            achieve2: {
              achieveName: "Educational Sessions",
              achieveAmount: 11
            },
            achieve3: {
              achieveName: "Crisis Interventions",
              achieveAmount: 21
            },
            postTxt: ""
          }
        },
        refugeesInAustralia: {
          causeName: "Refugees in Australia",
          charityName: "St Francis Social Services",
          thousandAchieves: {
            achieve1: {
              achieveName: "Safe Sleeps",
              achieveAmount: 16
            },
            achieve2: {
              achieveName: "Food and Grocery Stamps",
              achieveAmount: 1.6
            },
            achieve3: {
              achieveName: "Dollars in Financial Support",
              achieveAmount: 93
            },
            postTxt:
              "As well as access to English Classes, Employement Training, and a Local Mentor"
          }
        },
        childSlavery: {
          causeName: "Child Slavery",
          charityName: "Connecting Hands",
          thousandAchieves: {
            achieve1: {
              achieveName: "Months Vocational Training",
              achieveAmount: 6
            },
            achieve2: {
              achieveName: "Months Accommodation",
              achieveAmount: 6
            },
            achieve3: {
              achieveName: "Social support to aid integration",
              achieveAmount: null
            },
            postTxt: "As well as Medical and Psychological Care"
          }
        },
        mentalHealth: {
          causeName: "Mental Health",
          charityName: "LGBTI Health Alliance",
          thousandAchieves: {
            achieve1: {
              achieveName:
                "Professionals trained about inclusive aged care for LGBTI people",
              achieveAmount: 0.53
            },
            achieve2: {
              achieveName: "Gay people received mental health support",
              achieveAmount: 9
            },
            achieve3: {
              achieveName:
                "Views of videos or information and downloads of resources",
              achieveAmount: 23
            },
            postTxt: ""
          }
        },
        womanDomesticViolence: {
          causeName: "Woman and Domestic Violence",
          charityName: "Port Macquarie Hastings Specialist Service",
          thousandAchieves: {
            achieve1: {
              achieveName: "Victims with counselling support",
              achieveAmount: 0.6
            },
            achieve2: {
              achieveName: "Relocations to new homes",
              achieveAmount: 0.34
            },
            achieve3: {
              achieveName: "",
              achieveAmount: null
            },
            postTxt: ""
          }
        },
        globalPoverty: {
          causeName: "Global Poverty",
          charityName: "Against Malaria Foundation",
          thousandAchieves: {
            achieve1: {
              achieveName: "Long lasting insecticidal nets",
              achieveAmount: 300
            },
            achieve2: {
              achieveName: "Lives saved by Malaria prevention",
              achieveAmount: 0.2
            },
            achieve3: {
              achieveName: "",
              achieveAmount: null
            },
            postTxt:
              "As well as addressing the UN's global goals relating to Malaria elimination"
          }
        },
        youthAtRisk: {
          causeName: "Youth at Risk",
          charityName: "Streetwork Incorporated",
          thousandAchieves: {
            achieve1: {
              achieveName: "Mentor for 6 months",
              achieveAmount: 1
            },
            achieve2: {
              achieveName: "Support after crises",
              achieveAmount: null
            },
            achieve3: {
              achieveName: "Advice to get back on track",
              achieveAmount: null
            },
            postTxt: ""
          }
        },
        socialEnterprise: {
          causeName: "Social Enterprise",
          charityName: "The Bread and Butter Project",
          thousandAchieves: {
            achieve1: {
              achieveName: "Weeks of full time work, at $634.70/wk",
              achieveAmount: 3.6
            },
            achieve2: {
              achieveName:
                "On site training towards TAFE accreditation in food proessing",
              achieveAmount: null
            },
            achieve3: {
              achieveName:
                "One-on-one English tuition and counselling services",
              achieveAmount: null
            },
            postTxt:
              "As well as support in obtaining full time employment after becoming qualified"
          }
        },
        mentalHealth: {
          causeName: "Mental Health",
          charityName: "PANDA",
          thousandAchieves: {
            achieve1: {
              achieveName: "Hours of the national call centre",
              achieveAmount: 1.12
            },
            achieve2: {
              achieveName: "People reached in awareness media campaigns",
              achieveAmount: null
            },
            achieve3: {
              achieveName:
                "Health service professionals educated on perinatal anxiety and depression",
              achieveAmount: 1.2
            },
            postTxt: ""
          }
        }
      },
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
              <label htmlFor="contribution-cause">
                You have decided to support
              </label>
            </h1>
            {/*Underprivileged Youth
              Refugees in Australia
              Child Slavery
              Mental Health
              Women & Domestic Violence
              Global Poverty
              Youth at Risk
              Social Enterprise
              Mental Health */}
            <select id="contribution-cause" className="form-input">
              <option value="" />
            </select>
          </div>
          <div className="form-group">
            <h1>
              <label id="contribution-percentage-label" className="input-label">
                Annual Contribution Percentage
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
