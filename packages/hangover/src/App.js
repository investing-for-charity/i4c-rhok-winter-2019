import React, {Component} from 'react';
import causeData from './data/causeInfo';

import Carousel from './components/Carousel';
import DonationBox from './components/DonationBox';
import Slider from './components/Slider';

import './App.scss';
import Achievement from './components/Achievement';

import StLukes from './images/StLukes.png'
import StreetWork from './images/StreetWork.png'

class App extends Component {
  state = {
    selectedCause: null,
    donation: '',
    distribution: 4,
    achievements: [],
  }
  handleCauseClick = (cause) => {
    const {selectedCause} = this.state
    switch(cause.causeName){
      case 'Refugees in Australia':
        this.setState({img: StLukes});
        break;
      case 'Youth at Risk':
        this.setState({img: StreetWork});
        break;
      break;
      default:
        this.setState({img: ''})
    }
    if(selectedCause && this.state.selectedCause.causeName === cause.causeName){
      return this.setState({selectedCause: '', img: ''})
    }
    this.setState({selectedCause: cause}, () => this.calculateAmount())
      if(selectedCause) {
        
      }
  }

  handleDonationChange = (donation) => {
    donation = donation >= 0 ? donation : 0;
    this.setState({donation}, () => this.calculateAmount())
  }

  handleDistributionChange = (distribution) => {
    this.setState({distribution}, () => this.calculateAmount())
  }

  calculateAmount = () => {
    if(this.state.selectedCause) {
      const {donation, distribution, selectedCause} = this.state;
      const achievements = Object.values(selectedCause.thousandAchieves).map((achieve) => {
        const {achieveName} = achieve;
        const amount = parseFloat(donation / 1000 * achieve.achieveAmount * distribution / 100).toFixed(1);
        return {achieveName, amount}
      })
      this.setState({achievements});
    }
  }
  render() {
    const {selectedCause} = this.state
    return (
        <>
            <article>
                <h1>Charity impact simulator</h1>
                <p>Invest in changing lifes</p>
            </article>
            <main className="calculator">
                <section>
                    <article>
                        <h3><span>1</span>Choose a donation amount</h3>
                        <DonationBox
                          donation={this.state.donation}
                          handleDonationChange={this.handleDonationChange}
                        />
                    </article>
                    <article>
                        <Carousel
                            causes={causeData.causes}
                            handleCauseClick={this.handleCauseClick}
                            selectedCause={this.state.selectedCause}

                        />
                    </article>
                    <article>
                        <h3>
                            <span>3</span>
                            Decide how much you invest in that cause
                        </h3>
                        <Slider
                            handleDistributionChange={this.handleDistributionChange}
                            distribution={this.state.distribution}
                        />
                    </article>
                </section>
                <aside>
                    <article>
                        {selectedCause &&
                            `For ${this.state.distribution}% of $${this.state.donation}
                            you will help ${selectedCause.charityName} providing:`
                        }
                        <Achievement achievements={this.state.achievements}/>
                        <img src={this.state.img} alt="" />
                    </article>
                </aside>
            </main>
        </>
    );
  }
}

export default App;
