
import {Piece} from '../../Objects/Piece'
export class InitGame {


    static getRedPieces() {
        return [
            new Piece('j1', [1, 1],0,'j1'),
            new Piece('j2', [1, 9],0,'j2'),
            new Piece('p1', [3, 2],0,'p1'),
            new Piece('p2', [3, 8],0,'p2'),
            new Piece('m1', [1, 2],0,'m1'),
            new Piece('m2', [1, 8],0,'m2'),
            new Piece('x1', [1, 3],0,'x1'),
            new Piece('x2', [1, 7],0,'x2'),
            new Piece('s1', [1, 4],0,'s1'),
            new Piece('s2', [1, 6],0,'s2'),
            new Piece('z1', [4, 1],0,'z1'),
            new Piece('z2', [4, 3],0,'z2'),
            new Piece('z3', [4, 5],0,'z3'),
            new Piece('z4', [4, 7],0,'z4'),
            new Piece('z5', [4, 9],0,'z5'),
            new Piece('k', [1, 5],0,'k')
        ];
    }

    static getBlackPieces() {
        return [
            new Piece('j1', [10, 1],0,'j1'),
            new Piece('j2', [10, 9],0,'j2'),
            new Piece('p1', [8, 2],0,'p1'),
            new Piece('p2', [8, 8],0,'p2'),
            new Piece('m1', [10, 2],0,'m1'),
            new Piece('m2', [10, 8],0,'m2'),
            new Piece('x1', [10, 3],0,'x1'),
            new Piece('x2', [10, 7],0,'x2'),
            new Piece('s1', [10, 4],0,'s1'),
            new Piece('s2', [10, 6],0,'s2'),
            new Piece('z1', [7, 1],0,'z1'),
            new Piece('z2', [7, 3],0,'z2'),
            new Piece('z3', [7, 5],0,'z3'),
            new Piece('z4', [7, 7],0,'z4'),
            new Piece('z5', [7, 9],0,'z5'),
            new Piece('k', [10, 5],0,'k')
        ];
    }



}
