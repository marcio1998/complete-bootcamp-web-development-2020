const express = require("express");
const hhtps = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function (req, res) {
    const query = req.body.city;
    const apiKey = "df669fae5a9788d7c41f5a417d5b1ee0";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&APPID=" + apiKey +"&units=" + unit;
    hhtps.get(url, function(response){
        console.log(response.statusCode);
        //getting the data from the get method and parse to JSON
        response.on('data', function (data) { 
           const weatherData = JSON.parse(data);
           const temp = weatherData.main.temp;
           const weatherDescription = weatherData.weather[0].description;
           const icon = weatherData.weather[0].icon;
           const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
           res.write("<p>The weather is currently " + weatherDescription + "</p>");
           res.write("<h1>the temperature in " + query + " is: " + temp + " Celsius </h1>");
           res.write("<img src=" + imageUrl +  ">");
           res.send();
         });
    });
})




app.listen(3000, function () {
    console.log("Server is running on port 3000");
});