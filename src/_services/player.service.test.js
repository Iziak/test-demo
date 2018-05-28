import { playerService } from './player.service';
import { generator } from '../../tests/generator';

describe('Drafting', () => {
    it('one in waitlist', () => {
        var players = generator.generatePlayers(4, 3);
        var data = playerService.draftPlayers(players, 3)
        expect(data.newWaitlist.length).toEqual(1);
    })
    it('none in waitlist', () => {
        var players = generator.generatePlayers(2, 3);
        var data = playerService.draftPlayers(players, 2)
        expect(data.newWaitlist.length).toEqual(0);
    })
    it('player list empty', () => {
        var players = generator.generatePlayers(4, 3);
        var data = playerService.draftPlayers(players, 3)
        expect(players.length).toEqual(0);
    })
    it('squad averages', () => {
        var players = generator.generatePlayers(9, 3);
        var data = playerService.draftPlayers(players, 3);
        //loop through all squads and skills to ensure averages are a number > 0.
        for (let i = 0; i < data.squads.length; i++) {
            for(let j=0;j<data.squads[i].skills.length;j++){
                expect(data.squads[i].skills[j].rating>0).toEqual(true);
            }
        }
    })
})