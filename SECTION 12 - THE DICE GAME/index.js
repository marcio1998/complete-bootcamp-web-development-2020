//Adding the values of the random numbers.
var values = [];

for(var i = 0; i<document.getElementsByClassName("dice").length; i++){
    // Creating a random number 1 - 6.
    var randomNumber1 = Math.floor(Math.random()*6 + 1);
    values.push(randomNumber1);
    //Changing The image
    document.querySelectorAll("img")[i].setAttribute("src","images/dice"+randomNumber1+".png");
}
//Cheking the winner
if(values[0] > values[values.length-1]){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(values[0] < values[values.length-1]){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw";
}



