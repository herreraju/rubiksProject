
$(document).ready(function() {
    $(".bubble").hide();
    $(".buttle").hide();
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
