function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    var c = b;
    b = a;
    a = c;    
/***********Do not change the code below 👇*******/

    alert("a is " + a);
    alert("b is " + b);
}
test();