
import { RAgent } from '../Agent/RAgent'
import { REvaluation } from '../_Param/Reluvation';


export class RgreedyAgent extends RAgent {

    strategy = 0;
    DEPTH = 1;

    // private method of computing next move
    comptuteNextMove() {
        // var pieceNames = Object.keys(this.legalMoves);
        var piece;
        var maxVal = 0;
        var maxVal = -Infinity;
        var fromPos = [];
        var toPos = [];
        for (var i in this.myPieces) {
            var name = this.myPieces[i].name;
            var moves = this.legalMoves[name];
            for (var j in moves) {
                var move = moves[j];
                var value = this.getValueOfMove(name, move);
                fromPos = this.myPieces[i].position;
                if (value > maxVal) {
                    toPos = move;
                    piece = this.myPieces[i];
                    maxVal = value;
                }
            }
        }
        
        return [piece, toPos];
    }


    getValueOfMove(pieceName, toPos) {
        var piece = this.boardState[toPos.toString()];
        var posVal = REvaluation.posValue(pieceName, toPos);
        if (!piece) return posVal; // empty place
        if (piece[1]) alert("Bug");
        return REvaluation.pieceValue(piece[0]) + posVal;
    }


    // return a copy of an agent
    copy() {
        return new RgreedyAgent(this.team, this.myPieces.map(x => x.copy()), this.copyMoves());
    }
}
