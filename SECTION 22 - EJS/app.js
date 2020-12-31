const express = require("express");
const bodyParser = require("body-parser");
//require the date.js file
var date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//using ejs, setting at app.
app.set('view engine', 'ejs');
//adding css.
app.use(express.static("public"));

let items = [];
let workItems = [];



app.get('/', function (req, res) {
    //render data in the HTML file, that has the tag <%= kindOfDay %> and <%= newListItem =>
    let day = date();
    res.render('list', { listTitle: day, newListItem: items });
    //{} is used to render the data in the html file.
})

app.get('/work', function (req, res) {
    res.render('list', { listTitle: "Work List", newListItem: workItems })
})

app.post('/', function (req, res) {
    //receiving data from the html file.
    let item = req.body.newItem;
    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        //adding itens to the array.
        items.push(item);
        res.redirect("/");
    //redirect to the root.
    }

})


app.listen(3000, function () {
    console.log("Server is running on port 3000");
})