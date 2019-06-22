import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const causes = [
  {
    title: 'Global Poverty',
  },
  {
    title: 'Domestic Violence',
  }
]
class App extends Component {
  render() {
   
    return (
      <PageContainer >
        <div>Pick your Charity</div>
        <Carousel causes={causes}/>
      </PageContainer>
    );
  }
}

export default App;
