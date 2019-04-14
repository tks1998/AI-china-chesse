export class Piece {

    name: string;
    position: [number, number]; // (row, column)
    Reverse : boolean; // chess reverse = 1 , else = 0  
    truthname : string;
    constructor(name, position , Reverse , Tname) {
        this.name = name;
        this.position = position;
        this.Reverse = true ;
        this.truthname = Tname;
    }
    
    static copyFromDict(dict) {
        return new Piece(dict.name, dict.position,dict.Reverse,dict.truthname);
    }


    moveTo(newPos) {
        this.position = newPos; 
    }

    // return a copy of a piece
    copy() {
        return new Piece(this.name, this.position , this.Reverse ,this.truthname );
    }   

    update(name){
        this.name=this.truthname;
    }
}
