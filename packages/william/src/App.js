import React, { Component } from 'react';
import Donation from './components/donations';

import './styles/reset.css';
import './styles/accessibility.css';
import './styles/page-size.css';
import './styles/flex.css';
import './styles/app.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '500' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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

              <h2>Impact Calculator</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="g-flex__container">
                  <div className="g-flex__item g-flex__container g-flex__container--column">
                    <div className="g-flex__item">
                      <span className="c-calculator__number">1</span>
                      <h3>Donation</h3>
                      <Donation value={this.state.value} handleChange={this.handleChange} />
                    </div>
                    <div className="g-flex__item">
                      <h3>2. Cause</h3>
                    </div>
                  </div>
                  <div className="g-flex__item">
                    <h3>3. Impact</h3>
                  </div>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
