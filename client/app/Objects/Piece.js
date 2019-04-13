"use strict";
var Piece = (function () {
    function Piece(name, position, Reverse) {
        this.name = name;
        this.position = position;
        this.Reverse = true;
    }
    Piece.copyFromDict = function (dict) {
        return new Piece(dict.name, dict.position, dict.Reverse);
    };
    Piece.prototype.moveTo = function (newPos) {
        this.position = newPos;
    };
    // return a copy of a piece
    Piece.prototype.copy = function () {
        return new Piece(this.name, this.position, this.Reverse);
    };
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=Piece.js.map