"use strict";
var Piece_1 = require('../../Objects/Piece');
var InitGame = (function () {
    function InitGame() {
    }
    // random posistion chess 
    InitGame.RandomPosition = function () {
        var Rand = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        var Mask = [];
        var Random = [];
        for (var element = 0; element < Rand.length; element++) {
            while (1) {
                var k = Rand[Math.floor(Math.random() * Rand.length)];
                if (!(k.toString() in Mask)) {
                    Mask.push(k);
                    Random[element] = k;
                }
            }
        }
        return Random;
    };
    InitGame.RgetRedPieces = function () {
        var RedTeam = [[1, 1], [1, 9], [3, 2], [3, 8], [1, 2], [1, 8], [1, 3], [1, 7], [1, 4], [1, 6],
            [4, 1], [4, 3], [4, 5], [4, 7], [4, 9], [1, 5]];
        var rand = [];
        var random = [];
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0; ele < RedTeam.length; ele++) {
            random[ele] = RedTeam[ele];
        }
        return [
            new Piece_1.Piece('j1', random[0], 1),
            new Piece_1.Piece('j2', random[1], 1),
            new Piece_1.Piece('p1', random[2], 1),
            new Piece_1.Piece('p2', random[3], 1),
            new Piece_1.Piece('m1', random[4], 1),
            new Piece_1.Piece('m2', random[5], 1),
            new Piece_1.Piece('x1', random[6], 1),
            new Piece_1.Piece('x2', random[7], 1),
            new Piece_1.Piece('s1', random[8], 1),
            new Piece_1.Piece('s2', random[9], 1),
            new Piece_1.Piece('z1', random[10], 1),
            new Piece_1.Piece('z2', random[11], 1),
            new Piece_1.Piece('z3', random[12], 1),
            new Piece_1.Piece('z4', random[13], 1),
            new Piece_1.Piece('z5', random[14], 1),
            new Piece_1.Piece('k', random[15], 1)
        ];
    };
    InitGame.RgetBlackPieces = function () {
        var BlueTeam = [[10, 1], [10, 9], [8, 2], [8, 8], [10, 2], [10, 8], [10, 3], [10, 7],
            [10, 4], [10, 6], [7, 1], [7, 3], [7, 5], [7, 7], [7, 9], [10, 5]];
        var rand = [];
        var random = [];
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0; ele < BlueTeam.length; ele++) {
            random[ele] = BlueTeam[ele];
        }
        return [
            new Piece_1.Piece('j1', random[0], 1),
            new Piece_1.Piece('j2', random[1], 1),
            new Piece_1.Piece('p1', random[2], 1),
            new Piece_1.Piece('p2', random[3], 1),
            new Piece_1.Piece('m1', random[4], 1),
            new Piece_1.Piece('m2', random[5], 1),
            new Piece_1.Piece('x1', random[6], 1),
            new Piece_1.Piece('x2', random[7], 1),
            new Piece_1.Piece('s1', random[8], 1),
            new Piece_1.Piece('s2', random[9], 1),
            new Piece_1.Piece('z1', random[10], 1),
            new Piece_1.Piece('z2', random[11], 1),
            new Piece_1.Piece('z3', random[12], 1),
            new Piece_1.Piece('z4', random[13], 1),
            new Piece_1.Piece('z5', random[14], 1),
            new Piece_1.Piece('k', random[15], 1)
        ];
    };
    return InitGame;
}());
exports.InitGame = InitGame;
//# sourceMappingURL=Rinit.js.map