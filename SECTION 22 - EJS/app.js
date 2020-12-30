const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//using ejs, setting at app.
app.set('view engine', 'ejs');

var items = [];


app.get('/', function (req, res) {
    //Javascript object to get the date.
    var today = new Date();
    var currentDay = today.getDay();
    //options used in the toLocaleDateSting method.
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    var day = today.toLocaleDateString("en-US", options);
   
    //render data in the HTML file, that has the tag <%= kindOfDay %> and <%= newListItem =>
    res.render('list', {kindOfDay: day, newListItem: items});
                        //{} is used to render the data in the html file.
})

app.post('/', function(req, res){
    //receiving data from the html file..
    var item = req.body.newItem;
    //adding itens to the array.
    items.push(item);
    //redirect to the root.
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})