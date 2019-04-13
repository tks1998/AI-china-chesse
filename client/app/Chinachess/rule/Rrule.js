"use strict";
var RuleReverse = (function () {
    function RuleReverse() {
    }
    // R : reverse  , co tuong up   
    // overide chesse si and tinh     
    RuleReverse.possibleMovesForShi = function (currRow, currCol, boardStates, isLowerTeam) {
        var moves = [];
        var dx = [-1, 1, 0, 0];
        var dy = [0, 0, -1, 1];
        var newCol, newRow;
        for (var pos = 0; pos < 4; pos++) {
            newRow = newRow + dx[pos];
            newCol = newCol + dy[pos];
            if ([newRow, newCol].toString() in boardStates) {
                moves.push([newRow, newCol]);
            }
        }
        return moves;
    };
    RuleReverse.possibleMovesForShiang = function (currRow, currCol, boardStates, isLowerTeam) {
        var moves = [];
        var dx = [-2, 2, 2, -2];
        var dy = [-2, 2, -2, 2];
        var newCol, newRow;
        for (var pos = 0; pos < 4; pos++) {
            newRow = newRow + dx[pos];
            newCol = newCol + dy[pos];
            if ([newRow, newCol].toString() in boardStates) {
                moves.push([newRow, newCol]);
            }
        }
    };
    RuleReverse.minRow = 1;
    RuleReverse.maxRow = 10;
    RuleReverse.minCol = 1;
    RuleReverse.maxCol = 9;
    return RuleReverse;
}());
exports.RuleReverse = RuleReverse;
//# sourceMappingURL=Rrule.js.map