//Select the object with the input selector.
//return single item. the first slector in the DOM tree
document.querySelector("input").click();
//calling the click method

//there is 3 li elements in the HTML file, so, we have to select the li tag we want, the getElementsByTagName return an array.
document.getElementsByTagName("li")[2].innerHTML = "Marcio";
document.getElementsByTagName("li")[1].style.color = "purple";
//return the length of the array
console.log(document.getElementsByTagName("li").length);

//Select by class name.
console.log(document.getElementsByClassName("btn").length);

//OBS: ELEMENTS = Array.

//Select by id.
document.getElementById("title").innerHTML = "Good Bye";

document.querySelector("h1").classList.add("huge");

//Changing HTML attributes.
document.querySelector("a").setAttribute("href", "https://www.bing.com/?cc=br");