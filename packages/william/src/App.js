import React, { Component } from 'react';
import Donation from './components/donations';
import Cause from './components/cause';
import Impact from './components/impact';

import 'semantic-ui-css/semantic.min.css';
import './styles/app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationValue: '',
      causeFocus: false,
      impactFocus: false,
      cause: false,
      stfrancis: false,
      streetwork: false
    };

    // this.handleChangeDonation = this.handleChangeDonation.bind(this);
    // this.handleChangeCause = this.handleChangeCause.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDonation = (event) => {
    this.setState({
      donationValue: event.target.value,
      causeFocus: true,
    });
  }

  handleChangeStreetwork = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      cause: true,
      impactFocus: true,
      streetwork: !prevState.streetwork
    }));
  }

  handleChangeStfrancis = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      cause: true,
      impactFocus: true,
      stfrancis: !prevState.stfrancis
    }));
  }

  handleSubmit = (event) => {
    alert(`A donation of ${this.state.donationValue} was submitted to ${this.state.cause}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="c-app">
        {/* <header className="g-page-padding c-header">
          <div className="g-inner-wrapper g-inner-wrapper--100 g-inner-wrapper--default">
            <div className="g-flex__container g-flex__container--justify-space-between">
              <div className="g-flex__item"><span>Logo</span> <span><h1>I4C</h1></span></div>
              <ul className="g-flex__item g-flex__container">
                <li className="g-flex__item"><a href="#calculator">Impact Calculator</a></li>
                <li className="g-flex__item"><a href="#how-it-works">How it Works</a></li>
              </ul>
            </div>
          </div>
        </header> */}

        <main>
          <div id="calculator" className="c-calculator">
            <div className="g-inner-wrapper g-inner-wrapper--100 g-inner-wrapper--default">
              <h2 className="u-visually-hidden">Impact Calculator</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="g-grid__container--calc">
                  <div className="g-grid__item--content-left">
                    <div className="g-flex__container g-flex__container--column c-calculator__donations-and-causes">
                      <div className="g-flex__item">
                        <Donation focus={this.state.causeFocus} value={this.state.donationValue} handleChange={this.handleChangeDonation} />
                      </div>
                      {
                        this.state.impactFocus &&
                        <div className="g-flex__item">
                          <Cause stfrancis={this.state.stfrancis} streetwork={this.state.streetwork} focus={this.state.causeFocus} handleChangeStreetwork={this.handleChangeStreetwork} handleChangeStfrancis={this.handleChangeStfrancis} />
                        </div>
                      }
                    </div>
                  </div>
                  <div className="g-grid__item--content-right">
                    {
                      !this.state.causeFocus && !this.state.impactFocus &&
                      <div className="g-flex__item g-flex__container g-flex__container--column c-calculator__intro">
                        <h3 className="g-flex__item">Calculate the impact your donation will make</h3>
                        <p className="g-flex__item">Use the calculator to help you decide which charities you would like to support and exactly how your contribution will impact lives.</p>
                      </div>
                    }
                    {
                      this.state.causeFocus && this.state.impactFocus === false &&
                      <div className="g-flex__item g-flex__container g-flex__container--column c-calculator__causes">
                        <div className="g-flex__item">
                          <Cause stfrancis={this.state.stfrancis} streetwork={this.state.streetwork} focus={this.state.causeFocus} handleChangeStreetwork={this.handleChangeStreetwork} handleChangeStfrancis={this.handleChangeStfrancis} />
                        </div>
                      </div>
                    }
                    {
                      this.state.impactFocus &&
                      <div className="g-flex__item g-flex__container g-flex__container--column c-calculator__causes">
                        <Impact causeSet={this.state.stfrancis || this.state.streetwork} focus={this.state.impactFocus} donationValue={this.state.donationValue} stfrancis={this.state.stfrancis} streetwork={this.state.streetwork} />
                      </div>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
