

class Pawn {
    constructor(color,startPosition){
        this.color = color;
        this.startPosition = startPosition;
        this.isMoved = false;
    }
    move(){
        if (this.isMoved===false){
            switch (move) {
                case 2:
                    this.position = this.position + 2;
                    break;
            
                case 1:
                    this.position = this.position +1;
                    break;
            }
        }
        this.position = this.position + 1
    }

}

move(){}
eat(){}
promote(){}

