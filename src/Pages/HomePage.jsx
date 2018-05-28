import React from 'react';
import { connect } from 'react-redux';
import { playerActions } from '../_actions';
import { WaitList, DraftControl, Squads } from '../_components';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(playerActions.getPlayers());
  }
  render() {
    return (
      <section className="page">
        <DraftControl></DraftControl>
        <h2>Waitlist</h2>
        <WaitList players={this.props.waitlist}></WaitList>
        <h2>Squads</h2>
        <Squads squads={this.props.squads}></Squads>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { playerList } = state;
  return {
    waitlist: playerList.waitlist,
    squads: playerList.squads
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };