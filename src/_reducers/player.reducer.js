import { playerConstants } from '../_constants';

export function playerList(state = {}, action) {
  switch (action.type) {
    case playerConstants.GET_PLAYERS_REQUEST:
    case playerConstants.DRAFT_PLAYERS_REQUEST:
      return { status: 'Pending' };
    case playerConstants.GET_PLAYERS_SUCCESS:
      return { status: 'Success', waitlist: action.players };
    case playerConstants.DRAFT_PLAYERS_SUCCESS:
      return { status: 'Success', waitlist: action.payload.newWaitlist, squads: action.payload.squads }
    case playerConstants.DRAFT_RESET:
      return { status: 'Success', waitlist: action.players };
    case playerConstants.GET_PLAYERS_FAILURE:
      return { status: action.error };
    default:
      return state
  }
}
export function stored(state = {}, action) {
  switch (action.type) {
    case playerConstants.GET_PLAYERS_SUCCESS:
    case playerConstants.DRAFT_RESET:
      return { players: action.players.slice() }
    default:
      return state
  }
}