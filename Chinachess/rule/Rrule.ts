
export class RuleReverse{
    static minRow = 1 ;
    static maxRow = 10;
    static minCol = 1 ;
    static maxCol = 9 ;
    // R : reverse  , co tuong up   
    static RpossibleMovesForMa(currRow, currCol, boardStates , Reverse ) {
        var moves = [];
        if (!([currRow + 1, currCol].toString() in boardStates)) {
            moves.push([currRow + 2, currCol + 1]);
            moves.push([currRow + 2, currCol - 1]);
        }
        if (!([currRow - 1, currCol].toString() in boardStates)) {
            moves.push([currRow - 2, currCol + 1]);
            moves.push([currRow - 2, currCol - 1]);
        }
        if (!([currRow, currCol + 1].toString() in boardStates)) {
            moves.push([currRow + 1, currCol + 2]);
            moves.push([currRow - 1, currCol + 2]);
        }
        if (!([currRow, currCol - 1].toString() in boardStates)) {
            moves.push([currRow + 1, currCol - 2]);
            moves.push([currRow - 1, currCol - 2]);
        }
        return moves;
    }   

}