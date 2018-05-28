import { draftHelper } from './draftHelper';
import { Squad } from '../_objects';
import { generator } from '../../tests/generator'

describe('draftHelper', () => {
    it('equal teams', () => {
        var players = generator.generatePlayers(9);
        var squads = generator.generateSquads(3);
        draftHelper.snakeDraft(squads, players, squads.length);
        expect(squads[0].players.length == 3 && squads[1].players.length == 3 && squads[2].players.length == 3).toEqual(true);
    })
    it('ensure snaking', () => {
        var players = generator.generatePlayers(9);
        var squads = generator.generateSquads(3);
        draftHelper.snakeDraft(squads, players, squads.length);
        expect(squads[2].players[1]._id == 'id_3' && squads[0].players[2]._id == 'id_6').toEqual(true);
    })
})