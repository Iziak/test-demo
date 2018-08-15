import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import {SectionWrapper} from '../../_components';
import peopleData from './data.json';

export default class SectionC extends Component {
  constructor(props) {
    super(props);
    this.state = {costInput:0,cost:0,people:null};

  }
  onClick(){
    this.setState({people:peopleData.people, cost:this.state.costInput}, () => {
      this.props.onClick();
    })
  }
  renderPeople(){
    if(!this.state.people) return <div/>;
    return _.map(this.state.people, person => {
      return (
        <div key={person.name}>
          <div>Name: {person.name}</div>
          <div>Peanuts: {person.peanutCount}</div>
          <div>Value: ${person.peanutCount * this.state.cost}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <h2>Section 2</h2>
        <SectionWrapper>
          <div>
            <label htmlFor="cost">Cost of Peanut ($)</label>
            <input type="number" id="cost" onChange={e => this.setState({costInput:e.target.value})}/>
          </div>
          <button 
            id="btn" 
            onClick={() => this.onClick()}
          >
            Process Data
          </button>
        </SectionWrapper>
        <h3>Display</h3>
        <SectionWrapper>
          {this.renderPeople()}
        </SectionWrapper>
      </div>
    );
  }
}