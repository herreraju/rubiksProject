//cube.style.webkitTransform =
//"rotateX(" + x + "deg) rotateY(" + y + "deg)";

function Edge(st1, st2, st3)
{
    this.st1 = st1;
    this.st2 = st2;
    this.st3 = st3;
};

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
        console.log(this.c1 + " " + this.c2 + " " + this.c3);
        console.log(this.c4 + " " + this.c5 + " " + this.c6);
        console.log(this.c7 + " " + this.c8 + " " + this.c9);
        console.log("")
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
};

function SideMaker()
{
    return new Side("1", "2", "3", "4", "5", "6", "7", "8", "9");
};

var side1 = SideMaker();
side1.setAll("blue");
var side2 = SideMaker();
side2.setAll("white");
var side3 = SideMaker();
side3.setAll("green");
var side4 = SideMaker();
side4.setAll("yellow");
var side5 = SideMaker();
side5.setAll("red");
var side6 = SideMaker();
side6.setAll("orange");
function  printEvery() {
    side1.printAll();
    side2.printAll();
    side3.printAll();
    side4.printAll();
    side5.printAll();
    side6.printAll();
}
printEvery();