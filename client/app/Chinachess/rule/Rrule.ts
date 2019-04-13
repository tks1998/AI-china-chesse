
export class RuleReverse{
    static minRow = 1 ;
    static maxRow = 10;
    static minCol = 1 ;
    static maxCol = 9 ;
    // R : reverse  , co tuong up   
    // overide chesse si and tinh     
    static possibleMovesForShi(currRow, currCol, boardStates, isLowerTeam) {
        var moves = [];
        var dx = [-1,1,0,0];
        var dy = [0,0,-1,1];
        var newCol , newRow ;
        for (var pos = 0 ; pos<4 ; pos++)
        {
            newRow = newRow + dx[pos] ; 
            newCol = newCol + dy[pos] ;
            if ( [newRow,newCol].toString() in boardStates)
            {
                moves.push([newRow,newCol]);
            } 
        }
        return moves;
    }
    static possibleMovesForShiang(currRow, currCol, boardStates, isLowerTeam)
    {
        var moves = [];
        var dx = [-2,2,2,-2];
        var dy = [-2,2,-2,2];
        var newCol , newRow ;
        for (var pos = 0 ; pos<4 ; pos++)
        {
            newRow = newRow + dx[pos] ; 
            newCol = newCol + dy[pos] ;
            if ( [newRow,newCol].toString() in boardStates)
            {
                moves.push([newRow,newCol]);
            } 
        }
    }
}