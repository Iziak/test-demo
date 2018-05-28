import { Player } from './Player';
import { generator } from '../../tests/generator'

describe('Player Calculate Rating', () => {
    it('no skills', () => {
        var player = generator.generatePlayer(0,0);
        player.calculateRating();
        expect(player.rating).toEqual(0);
    })
    it('skills of 0', () => {
        var player = new Player({skills:[{type:"1",rating:0},{type:"2",rating:0},{type:"3",rating:0}]});
        player.calculateRating();
        expect(player.rating).toEqual(0);
    })
})