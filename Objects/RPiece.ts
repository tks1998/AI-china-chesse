export class RPiece {

    name: string;
    position: [number, number]; // (row, column)
    Reverse : boolean;
    constructor(name, position , Reverse) {
        this.name = name;
        this.position = position;
        this.Reverse = true ;
    }
    
    static copyFromDict(dict) {
        return new RPiece(dict.name, dict.position,dict.Reverse);
    }


    moveTo(newPos) {
        this.position = newPos;
    }

    // return a copy of a piece
    copy() {
        return new RPiece(this.name, this.position , this.Reverse );
    }

}
