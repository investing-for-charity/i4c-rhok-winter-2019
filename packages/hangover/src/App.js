import React, {Component} from 'react';
import causeData from './data/causeInfo';

import Carousel from './components/Carousel';
import DonationBox from './components/DonationBox';
import Slider from './components/Slider';

import './App.scss';
import Achievement from './components/Achievement';


class App extends Component {
  state = {
    selectedCause: null,
    donation: '',
    distribution: 4,
    achievements: [],
  }
  handleCauseClick = (cause) => {
    this.setState({selectedCause: cause}, () => this.calculateAmount())
  }

  handleDonationChange = (donation) => {
    this.setState({donation}, this.calculateAmount())
  }

  handleDistributionChange = (distribution) => {
    this.setState({distribution})
    this.calculateAmount()
  }

  calculateAmount = () => {
    if(this.state.selectedCause) {
      const {donation, distribution, selectedCause} = this.state;
      const achievements = Object.values(selectedCause.thousandAchieves).map((achieve) => {
        const {achieveName} = achieve;
        const amount = Math.ceil(donation / 1000 * achieve.achieveAmount * distribution / 100);
        return {achieveName, amount}
      })
      this.setState({achievements});
    }
  }
  render() {
    const {selectedCause} = this.state
    return (
        <main className="calculator">
            <h1>Charity impact simulator</h1>
            <h2>Invest in changing lifes</h2>
            <section>
                <h3><span>1</span>Choose a donation amount</h3>
                <DonationBox
                  donation={this.state.donation}
                  handleDonationChange={this.handleDonationChange}/>
            </section>
            <section>
                <h3><span>2</span>Pick your Charity</h3>
                <Carousel
                    causes={causeData.causes}
                    handleCauseClick={this.handleCauseClick}
                />
                <div>{selectedCause && selectedCause.charityName}</div>
            </section>
            <section>
                <h3><span>3</span>Decide how much you invest in that cause</h3>
                <Slider
                    handleDistributionChange={this.handleDistributionChange}
                    distribution={this.state.distribution}
                />
            <Achievement achievements={this.state.achievements}/>

            </section>
        </main>
    );
  }
}

export default App;
