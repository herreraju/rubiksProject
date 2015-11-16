//window.onresize = cubeResize;
//function cubeResize(){
//    if(window.outerWidth < 513){
//        cuWi = 171;
//        ciWi = 43;
//        cuBo = 3;
//        logSize = 34;
//        bootStrapSize = "xs,512";
//    }
//    else if((window.outerWidth >= 513) && (window.outerWidth <= 768)){
//        cuWi = 256;
//        ciWi = 65;
//        cuBo = 4;
//        logSize = 51;
//        bootStrapSize = "sm,768";
//    }
//    else if((window.outerWidth > 768) && (window.outerWidth <= 992)){
//        cuWi = 331;
//        ciWi = 84;
//        cuBo = 6;
//        logSize = 66;
//        bootStrapSize = "md,992";
//    }
//    else if(window.outerWidth > 992){
//        cuWi = 400;
//        ciWi = 101;
//        cuBo = 7;
//        logSize = 80;
//        bootStrapSize = "lg,1200";
//    }
//    document.getElementById("cube").style.width = (cuWi.toString() + "px");
//    document.getElementById("cube").style.height = (cuWi.toString() + "px");
//    document.getElementById("logo").style.width = (logSize.toString() + "px");
//    document.getElementById("logo").style.height = (logSize.toString() + "px");
//    for(var _y = 0; _y < document.getElementsByClassName("cubie").length; _y++)
//        {
//        document.getElementsByClassName("cubie")[_y].style.width = (ciWi + "px");
//        document.getElementsByClassName("cubie")[_y].style.height = (ciWi + "px");
//        document.getElementsByClassName("cubie")[_y].style.border = (cuBo + "px solid black");
//        }
//    //alert("Width: " + cuWi + " // Border: " + cuBo + " // Size: " + bootStrapSize + " // EachWidth: " + ciWi + " // Screen: " + window.outerWidth + " // zi: " + document.getElementById("cube").style.width + ", " + document.getElementById("cube").style.height + ", " + document.getElementsByClassName("cubie")[0].style.width + ", " + document.getElementsByClassName("cubie")[0].style.height + ", " + document.getElementsByClassName("cubie")[0].style.border);
//}
function shuffleRe(){
    shuffle_hard = parseInt(document.getElementById("gez").value, 10);
    document.getElementById("gez").value = "";
    document.getElementById("currentShuf").innerHTML = shuffle_hard;
}
$(document).ready(function() {
    $(".bubble").hide();
    //$(".buttle").hide();
    //cubeResize();
});
$('#cube').on("mousedown", function()
{
    document.querySelector('#cube').addEventListener("mousemove", mouseOver);
}).on("mouseup", function()
{
    document.querySelector('#cube').removeEventListener("mousemove", mouseOver);
}).on("dblclick", function()
{
    toggleSides(ifNe);
});
$("#ik").click(function(){
    $(".bubble").toggle();
    $("#ik").toggle();
});
$(".bubble").click(function(){
    $(".bubble").toggle();
    $("#ik").toggle();
});
$("#syn").on("dblclick", function(){
    $(".buttle").toggle();
});
function h()
{
    alert("zx")
}
function mouseOver(e){
    var y = e.pageX;
    var x = -e.pageY;
    rotate(x,y);
}
function showPlane(c){
    document.querySelector('#cube').style.background = c.checked ? '#CCC': '';
}
function rotate(newX,newY){
    var x = parseInt((newX || 0));
    var y = parseInt((newY || 0));
    var cube = document.getElementById('cube');
    cube.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
}
var map = {
    16: [false, 12], //shuffle
    32: [false, 13], //solve
    70: [false, 0], //front
    66: [false, 2], //back
    76: [false, 4], //left
    82: [false, 6], //right
    85: [false, 8], //up
    68: [false, 10], //down
    222: [false, undefined] //prime
};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode][0] = true;
        for(var mz in map)
        {
            if (map[mz][0] && map[222][0])
            {
                array_of_functions[map[mz][1] + 1](0);
            }
            else if(map[mz][0])
            {
                array_of_functions[map[mz][1]](0);
            }
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode][0] = false;
    }
});