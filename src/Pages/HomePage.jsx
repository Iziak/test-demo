import React, { Component } from 'react';
import styled from 'styled-components';

import SectionA from './Components/SectionA';

const PageWrapper = styled.div`
  padding: 5%;
`

export class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <SectionA />
      </PageWrapper>
    );
  }
}