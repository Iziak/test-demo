import { playerConstants } from '../_constants';
import { playerService } from '../_services';
import { playerHelper } from '../_helpers';

export const playerActions = {
    getPlayers,
    draftPlayers,
    resetDraft
};

function getPlayers() {
    return dispatch => {
        dispatch(request());
        playerService.getPlayers()
            .then(
                jsonPlayers => dispatch(success(playerHelper.convertToPlayerClass(jsonPlayers.players))),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: playerConstants.GET_PLAYERS_REQUEST } }
    function success(players) { return { type: playerConstants.GET_PLAYERS_SUCCESS, players } }
    function failure(error) { return { type: playerConstants.GET_PLAYERS_FAILURE, error } }
};

function draftPlayers(players,squadCount){
    return dispatch => {
        dispatch(request());
        const payload = playerService.draftPlayers(players,squadCount);
        dispatch(success(payload));
    };
    function request() { return { type: playerConstants.DRAFT_PLAYERS_REQUEST } }
    function success(payload) { return { type: playerConstants.DRAFT_PLAYERS_SUCCESS, payload } }
}

function resetDraft(players){
    return {type: playerConstants.DRAFT_RESET, players}
}