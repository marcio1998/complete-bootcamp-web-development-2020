function isLeap(year) {
    var leap_4 = year/4;
    var leap_100 = year/100;
    var leap_400 = year/400;
    console.log(leap_4%1, leap_100%1,leap_400%1);
if(leap_4 %1 === 0 && leap_400%1 ===0 || leap_4 %1 === 0 && leap_100%1 !==0 || leap_400 %1 === 0 && leap_100%1 !==0){
    return "Leap Year";
}else{
    return "Not leap Year";
}
}
var years =  isLeap(1948);  
console.log(years);