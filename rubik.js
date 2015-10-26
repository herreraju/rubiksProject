//cube.style.webkitTransform =
//"rotateX(" + x + "deg) rotateY(" + y + "deg)";

function Edge(st1, st2, st3)
{
    this.st1 = st1;
    this.st2 = st2;
    this.st3 = st3;
};
var edg = new Edge("k", "", "");

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
        for(var key in this)
        {
            this[key] = clr;
        }
    };

    this.printAll = function()
    {
        console.log(this.c1 + this.c2 + this.c3);
        console.log(this.c4 + this.c5 + this.c6);
        console.log(this.c7 + this.c8 + this.c9);
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

var side1 = new Side("a", "b", "c", "d", "e", "f", "g", "h", "i");
side1.printAll();
side1.rotate(3);
side1.printAll();
side1.appendEdge((side1.getEdge(1, 2, 3)), 7, 8, 9);
side1.printAll();






function updateCube()
{
    document.getElementsByClassName(".utl").style.color = up.c1;
    document.getElementsByClassName(".utc").style.color = up.c2;
    document.getElementsByClassName(".utr").style.color = up.c3;
    document.getElementsByClassName(".ucl").style.color = up.c4;
    document.getElementsByClassName(".ucc").style.color = up.c5;
    document.getElementsByClassName(".ucr").style.color = up.c6;
    document.getElementsByClassName(".ubr").style.color = up.c7;
    document.getElementsByClassName(".ubc").style.color = up.c8;
    document.getElementsByClassName(".ubl").style.color = up.c9;

    document.getElementsByClassName(".ftl").style.color = front.c1;
    document.getElementsByClassName(".ftc").style.color = front.c2;
    document.getElementsByClassName(".ftr").style.color = front.c3;
    document.getElementsByClassName(".fcl").style.color = front.c4;
    document.getElementsByClassName(".fcc").style.color = front.c5;
    document.getElementsByClassName(".fcr").style.color = front.c6;
    document.getElementsByClassName(".fbr").style.color = front.c7;
    document.getElementsByClassName(".fbc").style.color = front.c8;
    document.getElementsByClassName(".fbl").style.color = front.c9;

    document.getElementsByClassName(".dtl").style.color = down.c1;
    document.getElementsByClassName(".dtc").style.color = down.c2;
    document.getElementsByClassName(".dtr").style.color = down.c3;
    document.getElementsByClassName(".dcl").style.color = down.c4;
    document.getElementsByClassName(".dcc").style.color = down.c5;
    document.getElementsByClassName(".dcr").style.color = down.c6;
    document.getElementsByClassName(".dbr").style.color = down.c7;
    document.getElementsByClassName(".dbc").style.color = down.c8;
    document.getElementsByClassName(".dbl").style.color = down.c9;

    document.getElementsByClassName(".rtl").style.color = right.c1;
    document.getElementsByClassName(".rtc").style.color = right.c2;
    document.getElementsByClassName(".rtr").style.color = right.c3;
    document.getElementsByClassName(".rcl").style.color = right.c4;
    document.getElementsByClassName(".rcc").style.color = right.c5;
    document.getElementsByClassName(".rcr").style.color = right.c6;
    document.getElementsByClassName(".rbr").style.color = right.c7;
    document.getElementsByClassName(".rbc").style.color = right.c8;
    document.getElementsByClassName(".rbl").style.color = right.c9;

    document.getElementsByClassName(".ltl").style.color = left.c1;
    document.getElementsByClassName(".ltc").style.color = left.c2;
    document.getElementsByClassName(".ltr").style.color = left.c3;
    document.getElementsByClassName(".lcl").style.color = left.c4;
    document.getElementsByClassName(".lcc").style.color = left.c5;
    document.getElementsByClassName(".lcr").style.color = left.c6;
    document.getElementsByClassName(".lbr").style.color = left.c7;
    document.getElementsByClassName(".lbc").style.color = left.c8;
    document.getElementsByClassName(".lbl").style.color = left.c9;

    document.getElementsByClassName(".btl").style.color = back.c1;
    document.getElementsByClassName(".btc").style.color = back.c2;
    document.getElementsByClassName(".btr").style.color = back.c3;
    document.getElementsByClassName(".bcl").style.color = back.c4;
    document.getElementsByClassName(".bcc").style.color = back.c5;
    document.getElementsByClassName(".bcr").style.color = back.c6;
    document.getElementsByClassName(".bbr").style.color = back.c7;
    document.getElementsByClassName(".bbc").style.color = back.c8;
    document.getElementsByClassName(".bbl").style.color = back.c9;
}