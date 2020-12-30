//Create an array using []
var guestList = ["Angela", "Jack", "James", "Lara", "Jason"];
//Return the length of the array.
console.log(guestList.length);

//See if your name is in the guest list
var yourName = prompt("Enter your Name:");
//includes -> if the element exists in the array return true.
var search = guestList.includes(yourName);
if(search === true){
    alert("Welcome " + yourName);
}else{
    alert("Youa are not Invited");
}