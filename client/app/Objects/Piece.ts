export class Piece {

    name: string;
    position: [number, number]; // (row, column)
    Reverse : boolean;
    constructor(name, position , Reverse) {
        this.name = name;
        this.position = position;
        this.Reverse = true ;
    }
    
    static copyFromDict(dict) {
        return new Piece(dict.name, dict.position,dict.Reverse);
    }


    moveTo(newPos) {
        this.position = newPos;
    }

    // return a copy of a piece
    copy() {
        return new Piece(this.name, this.position , this.Reverse );
    }   

}
