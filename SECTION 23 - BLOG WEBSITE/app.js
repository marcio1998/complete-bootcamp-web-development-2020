//jshint esversion:6

//require express, body-parse and ejs
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

//calling express object for the app const.
const app = express();

//creating an array to add the post obejct that recives data from the compose.ejs file
let posts = [];


//setting ejs.
app.set('view engine', 'ejs');
//using body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//using static files like css that is located on the public folder
app.use(express.static("public"));

//adding get request for the root page, localhost:3000.
app.get('/', function (req, res) {
  /**homeStartingContent is a "variable" inside the home.ejs file
   * {} using braces we specify that "variable" : the message we want to render
   */
  res.render('home', { homeStartingContent: homeStartingContent, postHome: posts });
})

//adding get request for the about.ejs page and send data to render
app.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutContent });
})

//adding get request for the contact.ejs page and send data to render
app.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactContent });
})

//adding get request for the compose.ejs page.
app.get('/compose', function (req, res) {
  res.render('compose');
})

//adding get request for the posts.
app.get('/posts/:topic', function (req, res) {
  //using lodash format the params that the url returns.
  const requestedTitle = _.lowerCase(req.params.topic);
  //using foreach to search if the title exists.
  posts.forEach(function (element) {
    const storedTitle = element.title;
    if (storedTitle === requestedTitle) {
      //if the title exists render the post page with the tile and the content
     res.render('post', {postTitle:element.title, postContent:element.post});
    }
  })
})

//adding post request for the /compose route.
app.post('/compose', function (req, res) {
  //reciving data from the compose.ejs file using the body-parser and adding in a object. 
  const post = {
    title: req.body.composeTitle,
    post: req.body.composePost
  }
  //adding the post object in the posts array.
  posts.push(post);
  //redirect to the root route.
  res.redirect('/');
})










// starting the local server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
