var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.onload = function(setGradient);		
window.addEventListener("load", setGradient);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

var container = document.getElementById("div1");
var input0 = document.getElementById("color1");
var input1 = document.getElementById("color2");
var paragraph = document.createElement("p");
var node0 = document.createTextNode("Color 1:" + input0.value + "    ");
var node1 = document.createTextNode("Color 2:" + input1.value);
container.appendChild(input0);
container.appendChild(input1);
container.appendChild(paragraph);
paragraph.appendChild(node0);
paragraph.appendChild(node1);

var container = document.getElementById("div1");
var col1but = document.createElement("button");
var col2but = document.createElement("button");
var c1bLabel = document.createTextNode("Random color 1");
var c2bLabel = document.createTextNode("Random color 2");
container.appendChild(col1but);
container.appendChild(col2but);
col1but.appendChild(c1bLabel);
col2but.appendChild(c2bLabel);
col1but.setAttribute("onclick", randomHex());
col2but.setAttribute("onclick", randomHex());

document.getElementById("color1").value = random_hex();
document.getElementById("color2").value = random_hex(); 

function randomHex() {
	return '#' + Math.floor(Math.random()*16777215).toString(16);
}

// function changeHex(value) {
//       document.getElementById("color1").value = randomHex();
// }
    // input0.value = random_hex();
    // input1.value = random_hex

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);