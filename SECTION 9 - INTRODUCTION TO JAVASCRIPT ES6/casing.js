var name = "Marcio";

//toUpperCase Method the string will be in capital. 
alert(name.toUpperCase());
//toLowerCase Method.
alert(name.toLowerCase());

//Exercise, First character of the name will be capitalized.
var yourName = prompt("What is your name?");
alert("Hello " + yourName.slice(0,1).toUpperCase() + yourName.slice(1,yourName.length) + " Welcome");