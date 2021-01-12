const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true });


const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model('Article', articleSchema);

app.listen(3000, function () {
    console.log('server running on port 3000');
});

//First - Get method, fetches all the articles.
app.get('/articles', function (req, res) {
    Article.find({}, function (err, articlesCollection) {
        if (!err) {
            res.send(articlesCollection);
        } else {
            res.send(err);
        }
    });
});

//Second - Post method, creates one new article
app.post('/articles', function (req, res) {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function (err) {
        if (!err) {
            res.send(newArticle);
        } else {
            res.send(err);
        }
    });
});

// Third - Delete all the articles
app.delete('/articles', function (req, res) {
    Article.deleteMany({}, function (err) {
        if (!err) {
            res.send("Succesfully deleted all articles");
        } else {
            res.send(err);
        }
    });
});
