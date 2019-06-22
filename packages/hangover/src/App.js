import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import causeData from './data/causeInfo';
import DonationBox from './components/DonationBox';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
 
class App extends Component {
  state = {
    selectedCause: null,
    donation: ''
  }
  handleCauseClick = (cause) => {
    this.setState({selectedCause: cause})
  }

  handleDonationChange = (donation) => {
    this.setState({donation})
  }
  render() {
    return (
      <PageContainer >
        <div>Pick your Charity</div>
        <Carousel causes={causeData.causes} handleCauseClick={this.handleCauseClick}/>
        <DonationBox 
          donation={this.state.donation} 
          handleDonationChange={this.handleDonationChange}/>
      </PageContainer>
    );
  }
}

export default App;
