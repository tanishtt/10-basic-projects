function mycolor(){
    var red=document.getElementById("red").value;
var blue=document.getElementById("blue").value;
var green=document.getElementById("green").value;
var color="rgb("+red+","+green+","+blue+")";
document.body.style.backgroundColor=color;
document.getElementById('box').value=color;
}
document.getElementById('red').addEventListener('input',mycolor);
document.getElementById('green').addEventListener('input',mycolor);
document.getElementById('blue').addEventListener('input',mycolor);
