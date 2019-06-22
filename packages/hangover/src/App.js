import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import causeData from './data/causeInfo';
import DonationBox from './components/DonationBox';
import Slider from './components/Slider';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
 
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
      <PageContainer >
        <div>Pick your Charity</div>
        <Carousel causes={causeData.causes} handleCauseClick={this.handleCauseClick}/>
        <div>{selectedCause && selectedCause.charityName}</div>
        <DonationBox 
          donation={this.state.donation} 
          handleDonationChange={this.handleDonationChange}/>
        <Slider 
          handleDistributionChange={this.handleDistributionChange}
          distribution={this.state.distribution}
        />
      </PageContainer>
    );
  }
}

export default App;
