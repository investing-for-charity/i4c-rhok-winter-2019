import React, { Component } from 'react';
import Donation from './components/donations';
import Cause from './components/cause';
import Impact from './components/impact';

import './styles/reset.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/accessibility.css';
import './styles/page-size.css';
import './styles/flex.css';
import './styles/app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationValue: '500',
      changeFocus: false,
      impactFocus: false,
    };

    this.handleChangeDonation = this.handleChangeDonation.bind(this);
    this.handleChangeCause = this.handleChangeCause.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDonation(event) {
    this.setState({
      donationValue: event.target.value,
      changeFocus: true,
    });
  }

  handleChangeCause(event) {
    this.setState({
      cause: event.target.value,
      impactFocus: true,
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="c-app">
        <header className="g-page-padding c-header">
          <div className="g-inner-wrapper g-inner-wrapper--100 g-inner-wrapper--default">
            <div className="g-flex__container g-flex__container--justify-space-between">
              <div className="g-flex__item"><span>Logo</span> <span><h1>I4C</h1></span></div>
              <ul className="g-flex__item g-flex__container">
                <li className="g-flex__item"><a href="#calculator">Impact Calculator</a></li>
                <li className="g-flex__item"><a href="#how-it-works">How it Works</a></li>
              </ul>
            </div>
          </div>
        </header>

        <main>
          <div id="calculator" className="c-calculator">
            <div className="g-inner-wrapper g-inner-wrapper--100 g-inner-wrapper--default">
              <h2 className="u-visually-hidden">Impact Calculator</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="g-flex__container">
                  <div className="g-flex__item g-flex__container g-flex__container--column">
                    <div className="g-flex__item">
                      <Donation value={this.state.donationValue} handleChange={this.handleChangeDonation} />
                    </div>
                    <div className="g-flex__item">
                      <Cause focus={this.state.changeFocus} handleChange={this.handleChangeCause} />
                    </div>
                  </div>
                  <div className="g-flex__item">
                    <Impact focus={this.state.impactFocus} impact={this.state.impact} />
                  </div>
                </div>
                <input type="submit" value="Make Donation" />
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
