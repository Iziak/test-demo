import React, { Component } from 'react';
import styled from 'styled-components';

import {SectionWrapper} from '../../_components';

export default class SectionA extends Component {
  constructor(props) {
    super(props);
    this.state = {value:"",value2:""};

  }
  render() {
    return (
      <div>
        <h2>Section 1</h2>
        <SectionWrapper>
          <div>
            <label htmlFor="first-input">Super Label</label>
            <input id="first-input" type="text" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
          </div>
          <button id="btn" onClick={()=>this.setState({value2:this.state.value})}>Push Here</button>
          <div>
            <label htmlFor="output">Output</label>
            <div id="output">{this.state.value2}</div>
          </div>

        </SectionWrapper>
      </div>
    );
  }
}