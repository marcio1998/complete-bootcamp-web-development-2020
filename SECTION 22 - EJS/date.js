//jshint esversion: 6

module.exports = getDate;

function getDate(){
//Javascript object to get the date.
let today = new Date();
//options used in the toLocaleDateSting method.
let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
var day = today.toLocaleDateString("en-US", options);
return day;
}

