//First require Express.
const express = require("express");
//Require body-parser, to recive data from the HTML form.
const bodyParser = require("body-parser");

const app = express();
//adding bodyparse into express. app.use()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    //req.body take the data from the input name="num1";
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is: " + result);
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});