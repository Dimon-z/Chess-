class Gamefield {
    constructor(){

    }
    nextStep(){
        isShah()?WarnOpponent:continue,
        isMat()?EndGameMessage:continue,
        isPat()?PatMessage:continue,
        alert('передача хода'),

    }
}

gameFieldStartObject{
a1:[black,]
a2:[white,pawn]
a3:[black,]
a4:[white,]
a5:[black,]
a6:[white,]
a7:[black,pawn]
a8:[white,]
b1:[white,]
b2:[black,pawn]
b3:[white,]
b4:[black,]
b5:[white,]
b6:[black,]
b7:[white,pawn]
b8:[black,]
c1:[black,]
c2:[white,pawn]
c3:[black,]
c4:[white,]
c5:[black,]
c6:[white,]
c7:[black,pawn]
c8:[white,]
d1:[white,]
d2:[black,pawn]
d3:[white,]
d4:[black,]
d5:[white,]
d6:[black,]
d7:[white,pawn]
d8:[black,]
c1:[black,]
c2:[white,pawn]
c3:[black,]
c4:[white,]
c5:[black,]
c6:[white,]
c7:[black,pawn]
c8:[white,]
e1:[white,]
e2:[black,pawn]
e3:[white,]
e4:[black,]
e5:[white,]
e6:[black,]
e7:[white,pawn]
e8:[black,]
f1:[black,]
f2:[white,pawn]
f3:[black,]
f4:[white,]
f5:[black,]
f6:[white,]
f7:[black,]
f8:[white,]
g1:[white,]
g2:[black,pawn]
g3:[white,]
g4:[black,]
g5:[white,]
g6:[black,]
g7:[white,pawn]
g8:[black,]
h1:[black,]
h2:[white,pawn]
h3:[black,]
h4:[white,]
h5:[black,]
h6:[white,]
h7:[black,pawn]
h8:[white,]
}

new pawn(white)
new pawn(black)
new rook(black)
new knight(black)
new bishop(white)
gameFieldStartObject{
a:[[black,new rook(white)],[white,new pawn(white)],[black,],[white,],[black,],[white,],[black,new pawn(black)],[white,new rook(black)]]
b:[[white,new knight(white)],[black,new pawn(white)],[white,],[black,],[white,],[black,],[white,new pawn(black)],[black,new knight(black)]]
c:[[black,new bishop(white)],[white,new pawn(white)],[black,],[white,],[black,],[white,],[black,new pawn(black)],[white,new bishop(black)]]
d:[[white,new queen(white)],[black,new pawn(white)],[white,],[black,],[white,],[black,],[white,new pawn(black)],[black,new queen(black)]]
e:[[black,new king(white)],[white,new pawn(white)],[black,],[white,],[black,],[white,],[black,new pawn(black)],[white,new king(black)]]
f:[[white,new bishop(white)],[black,new pawn(white)],[white,],[black,],[white,],[black,],[white,new pawn(black)],[black,new bishop(black)]]
g:[[black,new knight(white)],[white,new pawn(white)],[black,],[white,],[black,],[white,],[black,new pawn(black)],[white,new knight(black)]]
h:[[white,new rook(white)],[black,new pawn(white)],[white,],[black,],[white,],[black,],[white,new pawn(black)],[black,new rook(black)]]
}

cellObject


[8] [8]



метод nextStep
проверки (isShah(),isMat(),isPat())


