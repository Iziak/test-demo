import React from 'react';
import { connect } from 'react-redux';
import { playerActions } from '../_actions';
import {SVGs} from './SVGs';

class DraftControl extends React.Component {
  handleReset() {
    this.props.dispatch(playerActions.resetDraft(this.props.stored.players));
  }
  // componentWillReceiveProps(newProps){
  //   if(newProps.playerList.waitlist&&newProps.playerList.waitlist.length>0&&!newProps.playerList.squads)   
  //     this.props.dispatch(playerActions.draftPlayers(newProps.playerList.waitlist, 3));
  // }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(playerActions.draftPlayers(this.props.playerList.waitlist, e.target.squadCount.value));
  }
  render() {
    const { waitlist } = this.props.playerList;
    if (!this.props.playerList.squads)
      return (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="hf-l">
              <label>Number of Squads: &nbsp;</label>
              <input type="number" min="0" step="1" max={waitlist ? waitlist.length : 0} name="squadCount" required defaultValue={4} />
            </div>
            <div className="hf-r">
              <button disabled={this.props.playerList.status == "Pending"}>Draft {SVGs.renderHockeyMasks()}</button>
            </div>
          </form>
        </div>
      );
    else
      return (
        <div>
          <div className="hf-l"></div>
          <div className="hf-r">
            <button type='button' className="undraft" onClick={() => { this.handleReset() }}>Undraft {SVGs.renderBench()}</button>
          </div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  const { playerList, stored } = state;
  return {
    playerList,
    stored
  };
}

const connectedDraftControl = connect(mapStateToProps)(DraftControl);
export { connectedDraftControl as DraftControl };