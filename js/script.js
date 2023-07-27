// Text Change
function textChange() {
	document.getElementById('t_h1').innerHTML = 'Hellow there!';
}
// Show Date
function displayDate() {
    document.getElementById('d_h2').innerHTML = Date();
}
// variable
function dataRepeat() {
	var message = "welcome to Shikbe shobai";
	document.getElementById('dr').innerHTML = message.repeat(3);
}
// Fontcolor
function fontColor() {
	document.getElementById('fc').style.color = 'green';
}

// Fontsize
function fontSize() {
	document.getElementById('fs').style.fontSize = '35px';
}



// bulb on off
function bulbOn(){
    document.getElementById('bulb').src ='images/on.gif';
}
function bulbOff(){
    document.getElementById('bulb').src ='images/off.gif';
}


// output start
function outPut() {
	var namber1 = 10;
	var namber2 = 20;
	var namber3 = 30;
	var result = namber1 + namber2 + namber3;

	document.getElementById('op').innerHTML = result;
}

// output start
function outPut(){

    let x, y, z;
    x = 5;      
    y = 6;      
    z = x + y;  

    document.getElementById("opp").innerHTML = "The value of z is " + z + ".";
}


