import React, { Component } from 'react';
import styled from 'styled-components';

import {SectionWrapper} from '../../_components';

export default class SectionB extends Component {
  constructor(props) {
    super(props);
    this.state = {enabled:true,count:0};

  }
  onClick(){
    this.setState({enabled:false,count:this.state.count+1})
    this.props.onClick();
  }
  render() {
    return (
      <div>
        <h2>Section 3</h2>
        <SectionWrapper>
          <button id="btn" 
            onClick={() => this.onClick()} 
            disabled={!this.state.enabled}
          >
            This button is fantastic, but only in moderation
          </button>
          <div>
            <div>Button Click Counter</div>
            <div id="counter">{this.state.count}</div>
          </div>
        </SectionWrapper>
      </div>
    );
  }
}