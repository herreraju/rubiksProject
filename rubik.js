//cube.style.webkitTransform =
//"rotateX(" + x + "deg) rotateY(" + y + "deg)";

function Edge(st1, st2, st3)
{
    this.st1 = st1;
    this.st2 = st2;
    this.st3 = st3;
}
function Side(c1, c2, c3, c4, c5, c6, c7, c8, c9){
    this.appendEdge = function(edg , p1, p2, p3)
    {
        var i = 1;
        var a = "c" + p1;
        var b = "c" + p2;
        var c = "c" + p3;
        this[a] = edg.st1;
        this[b] = edg.st2;
        this[c] = edg.st3;
    };
    this.getEdge = function(num1, num2, num3)
    {
        var i = 1;
        var a = "c" + num1;
        var b = "c" + num2;
        var c = "c" + num3;
        var e = new Edge(this[a], this[b], this[c]);
        return e;
    };
    this.rotate = function(numOfRot)
    {
        for(var i=0; i<numOfRot; i++)
        {
            var temp1 = this.c1;
            var temp2 = this.c2;
            this.c1 = this.c7;
            this.c2 = this.c4;
            this.c4 = this.c8;
            this.c7 = this.c9;
            this.c8 = this.c6;
            this.c9 = this.c3;
            this.c6 = temp2;
            this.c3 = temp1;
        }
    };

    this.setAll = function(clr)
    {
        for(var i = 1; i <= 9; i++)
        {
            this[("c" + i)] = clr;
        }
    };

    this.printAll = function()
    {
        return [(this.c1 + " " + this.c2 + " " + this.c3 + " "), (this.c4 + " " + this.c5 + " " + this.c6 + " "), (this.c7 + " " + this.c8 + " " + this.c9 + " ")];
    };
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
    this.c4 = c4;
    this.c5 = c5;
    this.c6 = c6;
    this.c7 = c7;
    this.c8 = c8;
    this.c9 = c9;
}
function SideMaker()
{
    return new Side("1", "2", "3", "4", "5", "6", "7", "8", "9");
}
var up = SideMaker();
up.setAll("blue");
var left = SideMaker();
left.setAll("orange");
var front = SideMaker();
front.setAll("white");
var right = SideMaker();
right.setAll("red");
var down = SideMaker();
down.setAll("green");
var back = SideMaker();
back.setAll("yellow");
//sides:
// 1
//234
// 5
// 6
//
//
//    123
//    456
//    789
//
//123 123 123
//456 456 456
//789 789 789
//
//    123
//    456
//    789
//
//    123
//    456
//    789

function  printEvery() {
    console.log("                   " + up.printAll()[0]);
    console.log("                   " + up.printAll()[1]);
    console.log("                   " + up.printAll()[2]);
    console.log(left.printAll()[0] + front.printAll()[0] + right.printAll()[0]);
    console.log(left.printAll()[1] + front.printAll()[1] + right.printAll()[1]);
    console.log(left.printAll()[2] + front.printAll()[2] + right.printAll()[2]);
    console.log("                   " + down.printAll()[0]);
    console.log("                   " + down.printAll()[1]);
    console.log("                   " + down.printAll()[2]);
    console.log("                   " + back.printAll()[0]);
    console.log("                   " +back.printAll()[1]);
    console.log("                   " + back.printAll()[2]);
}
function frontTurnC()
{
front.rotate();
var tempEdge = up.getEdge(7, 8, 9);
up.appendEdge((left.getEdge(9, 3, 6)), 7, 8, 9);
left.appendEdge((down.getEdge(1, 2, 3)), 3, 6, 9);
down.appendEdge((right.getEdge(7, 4, 1)), 1, 2, 3);
right.appendEdge(tempEdge, 1, 4, 7)
}
function frontTurnC()
{
    front.rotate();
    var tempEdge = up.getEdge(7, 8, 9);
    up.appendEdge((left.getEdge(9, 3, 6)), 7, 8, 9);
    left.appendEdge((down.getEdge(1, 2, 3)), 3, 6, 9);
    down.appendEdge((right.getEdge(7, 4, 1)), 1, 2, 3);
    right.appendEdge(tempEdge, 1, 4, 7)
}
function BackTurnC()
{
    front.rotate();
    var tempEdge = up.getEdge(7, 8, 9);
    up.appendEdge((left.getEdge(9, 3, 6)), 7, 8, 9);
    left.appendEdge((down.getEdge(1, 2, 3)), 3, 6, 9);
    down.appendEdge((right.getEdge(7, 4, 1)), 1, 2, 3);
    right.appendEdge(tempEdge, 1, 4, 7)
}
frontTurnC();
printEvery();
