var express = require("express");
var bodyparser = require("body-parser")
var app = express();
app.use(bodyparser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var calBmi = Math.floor(weight/Math.pow(height,2));

    res.send("The BMI = " + calBmi);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})