import {RPiece} from '../../Objects/RPiece';

export class probability {
    team: number;
    strategy: number = 0;
    legalMoves: {}; // name->[positions]
    pastMoves = [];
    myPieces: RPiece[];
    oppoPieces: RPiece[];
}