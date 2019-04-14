import { Piece } from '../../Objects/Piece';

export class InitGame {
    
    // random posistion chess 
    static RandomPosition(){
        var Rand = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        var Mask = [] ;
        var Random = [] ;
        for (var element = 0 ; element < Rand.length ; element++)
        {
            while (1)
            {
                var k = Rand[ Math.floor(Math.random() * Rand.length) ];
                if (! (k.toString() in Mask) )
                {
                    Mask.push(k);
                    Random[element] = k ;    
                }
            }
        }
        return Random;
    }
    
    static RgetRedPieces() {
        var  RedTeam = [[1,1],[1,9],[3,2],[3,8],[1,2],[1,8],[1,3],[1,7],[1,4],[1,6],
        [4,1],[4,3],[4,5],[4,7],[4,9]]
        var Tname =['j1','j2','p1','p2','m1','m2','x1','x2','s1','s2','z1','z2','z3','z4','z5','k'];
        var rand = [] ;
        var random = [];
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0 ;ele <RedTeam.length ; ele++)
        {
            random[ele] = RedTeam[ele];
        }
        return [
            new Piece('j1', random[0],1,Tname[0]),
            new Piece('j2', random[1],1,Tname[1]),
            new Piece('p1', random[2],1,Tname[2]),
            new Piece('p2', random[3],1,Tname[3]),
            new Piece('m1', random[4],1,Tname[4]),
            new Piece('m2', random[5],1,Tname[5]),
            new Piece('x1', random[6],1,Tname[6]),
            new Piece('x2', random[7],1,Tname[7]),
            new Piece('s1', random[8],1,Tname[8]),
            new Piece('s2', random[9],1,Tname[9]),
            new Piece('z1', random[10],1,Tname[10]),
            new Piece('z2', random[11],1,Tname[11]),
            new Piece('z3', random[12],1,Tname[12]),
            new Piece('z4', random[13],1,Tname[1),
            new Piece('z5', random[14],1,Tname[14]),
            new Piece('k', [1,5],1,'k')
        ];
    }

    static RgetBlackPieces() {
        var BlueTeam = [[10, 1],[10, 9], [8, 2],[8, 8],[10, 2],[10, 8],[10, 3],[10, 7],
            [10, 4],[10, 6],[7, 1],[7, 3],[7, 5],[7, 7],[7, 9]];
        var Newname =['j1','j2','p1','p2','m1','m2','x1','x2','s1','s2','z1','z2','z3','z4','z5','k'];
        var Tname = [];
        var rand = [] ;
        var random = [];
        // random posstion execept king 
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0 ;ele <BlueTeam.length ; ele++)
        {
            random[ele] = BlueTeam[rand[ele]];
            Tname[ele]  = Newname[rand[ele]]; 
        }
        return [
            new Piece('j1', random[0],1,Tname[0]),
            new Piece('j2', random[1],1,Tname[1]),
            new Piece('p1', random[2],1,Tname[2]),
            new Piece('p2', random[3],1,Tname[3]),
            new Piece('m1', random[4],1,Tname[4]),
            new Piece('m2', random[5],1,Tname[5]),
            new Piece('x1', random[6],1,Tname[6]),
            new Piece('x2', random[7],1,Tname[7]),
            new Piece('s1', random[8],1,Tname[8]),
            new Piece('s2', random[9],1,Tname[9]),
            new Piece('z1', random[10],1,Tname[10]),
            new Piece('z2', random[11],1,Tname[11]),
            new Piece('z3', random[12],1,Tname[12]),
            new Piece('z4', random[13],1,Tname[13]),
            new Piece('z5', random[14],1,Tname[14]),
            new Piece('k', [1,5],1,'k')
        ];
    }
}
