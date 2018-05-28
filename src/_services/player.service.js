import { authHeader, config, handleError, handleResponse, draftHelper } from '../_helpers';
import { Squad, Player } from '../_objects';

export const playerService = {
    getPlayers,
    draftPlayers
};

function getPlayers() {
    const requestOptions = {
        method: 'GET',
        headers: Object.assign({ 'Content-Type': 'application/json' })
    };
    return fetch(config.apiUrl + '/public/players.json', requestOptions).then(handleResponse, handleError);
}

function draftPlayers(players, squadCount) {

    //The number of players that will be left over
    const diff = players.length % squadCount;

    //Remove randomly for fairness
    var newWaitlist = [];
    for (let i = 0; i < diff; i++) {
        var removedPlayer = players.splice(Math.floor(Math.random() * players.length), 1)
        newWaitlist.push(removedPlayer[0]);
    }

    //Assign each player a rating based on sum of their skills
    for (let i = 0; i < players.length; i++) {
        players[i].calculateRating();
    }
    
    //Sort players based on the player rating (desc)
    players.sort((a, b) => {
        if (a.rating < b.rating)
            return 1
        else if (a.rating > b.rating)
            return -1;
        return 0;
    })

    //initialize squad array with empty squad objects
    var squads = [];
    for (let i = 0; i < squadCount; i++) {
        squads.push(new Squad(i+1));
    }

    //Snake draft the players based on the rating
    draftHelper.snakeDraft(squads,players,squadCount);

    return { newWaitlist, squads }
}