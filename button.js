document.getElementById(red).onClick=red;
function red()
{
   document.body.style.backgroundColor="red"
   document.getElementById('red').style.backgroundColor="red";

}
document.getElementById(blue).onClick=blue;
function blue()
{
   document.body.style.backgroundColor="blue"
   document.getElementById('blue').style.backgroundColor="blue";

}
document.getElementById(green).onClick=green;
function green()
{
   document.body.style.backgroundColor="green"
   document.getElementById('green').style.backgroundColor="green";

}
document.getElementById(reset).onClick=reset;
function reset()
{
   document.body.style.backgroundColor="white"
   document.getElementById('reset').style.backgroundColor="white";
   document.getElementById('red').style.backgroundColor="white";
   document.getElementById('blue').style.backgroundColor="white";
   document.getElementById('green').style.backgroundColor="white";
   


}


