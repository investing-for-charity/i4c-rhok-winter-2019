import React, {Component} from 'react';
import causeData from './data/causeInfo';

import Carousel from './components/Carousel';
import DonationBox from './components/DonationBox';
import Slider from './components/Slider';

import './App.less';


class App extends Component {
  state = {
    selectedCause: null,
    donation: '',
    distribution: 4,
  }
  handleCauseClick = (cause) => {
    this.setState({selectedCause: cause})
  }

  handleDonationChange = (donation) => {
    this.setState({donation})
  }
  handleDistributionChange = (distribution) => {
    this.setState({distribution})
    console.log(this.state.distribution)
  }
  render() {
    const {selectedCause} = this.state
    return (
      <section className="calculator">
        <h1>Charity impact simulator</h1>
        <h2>Invest in changing lifes</h2>
        <h3><span>1</span>Choose a donation amount</h3>
        <DonationBox
          donation={this.state.donation}
          handleDonationChange={this.handleDonationChange}/>
        <h3><span>2</span>Pick your Charity</h3>
        <Carousel causes={causeData.causes} handleCauseClick={this.handleCauseClick}/>
        <div>{selectedCause && selectedCause.charityName}</div>
        <h3><span>3</span>Decide how much you invest in that cause</h3>
        <Slider
          handleDistributionChange={this.handleDistributionChange}
          distribution={this.state.distribution}
        />
      </section>
    );
  }
}

export default App;
