//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://admin-marcio:gabriel963@cluster0.sfsjg.mongodb.net/todolistDB?retryWrites=true&w=majority', { useNewUrlParser: true });

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('item', itemSchema);

const item1 = new Item({
  name: "Welcome to your todolist!!"
});

const item2 = new Item({
  name: "Hit the + button to add a nwe item"
});

const item3 = new Item({
  name: "<-- Hit this to delete an item"
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
})

const List = mongoose.model('List', listSchema)


app.get("/", function (req, res) {

  Item.find({}, function (err, foundedItems) {
    if (foundedItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) console.log(err)
        console.log(defaultItems)
      });
      res.redirect('/');
    } else {
      res.render("list", { listTitle: "Today", newListItems: foundedItems });
    }

  });

});

app.get('/:customListName', function (req, res) {  
  const customListName = _.capitalize(req.params.customListName);
  List.findOne({name: customListName}, function(err, listedNames){
    if(!err){
      if(!listedNames){
        const list = new List({
          name: customListName,
          items: defaultItems
        })
        list.save()
        res.redirect('/' + customListName)
      }else{
        res.render('list',{ listTitle: customListName, newListItems: listedNames.items } )
    }
  }
})
})

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;
  
  const item = new Item({
    name: itemName
  });

  if(listName === "Today"){
    item.save(function (err) { 
      if(err) console.log(err)
      console.log(item._id)
     })
     res.redirect('/')
  }else{
    List.findOne({name: listName}, function (err, foundList) { 
      if(!err){
        foundList.items.push(item)
        foundList.save()
        res.redirect('/'+listName)
      }
     })
  }

});

app.post('/delete', function (req, res) { 
  const id = req.body.checkBox;
  const listName = req.body.listName;
  if(listName === 'Today'){
    Item.deleteOne({_id: id}, function(err){
      if(err) console.log(err)
      console.log("Deleted")
    })
    res.redirect('/')
  }else{
    List.findOneAndUpdate({name: listName}, {$pull:{items: {_id:id}}}, function (err,foundList) { 
      if(!err){
        res.redirect('/'+listName)
      }
     })
  }

 })

app.get("/work", function (req, res) {
  //res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
