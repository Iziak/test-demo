import React, { Component } from 'react';
import styled from 'styled-components';

import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';

const PageWrapper = styled.div`
  padding: 0 5%;
`

export class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <Section1 />
        <Section2 onClick={()=>{}} />
        <Section3 onClick={()=>{}} />
      </PageWrapper>
    );
  }
}