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

/*
*First - Get method, fetches all the articles.
*Second - Post method, creates one new article
*Third - Delete all the articles 
*/

app.route('/articles').get(function (req, res) {
    Article.find({}, function (err, articlesCollection) {
        if (!err) {
            res.send(articlesCollection);
        } else {
            res.send(err);
        }
    });
}).post(function (req, res) {
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
}).delete(function (req, res) {
    Article.deleteMany({}, function (err) {
        if (!err) {
            res.send("Succesfully deleted all articles");
        } else {
            res.send(err);
        }
    });
});

/*
*fourth - especific route for get element. 
*fifth - especific route for put.
*sixth - especific route for patch.
*seventh - especific route for delete
*/
app.route('/articles/:articleTitle').get(function (req, res) {
    const articleTitle = req.params.articleTitle;
    Article.findOne({ title: articleTitle }, function (err, foundArticle) {
        if (!err) {
            if (foundArticle === null) {
                res.send("Article title not found");
            } else {
                res.send(foundArticle);
            }
        } else {
            console.log(err)
        }
    })
}).put(function (req, res) {
    const articleTitle = req.params.articleTitle;
    Article.update({ title: articleTitle },
        { title: req.body.title, content: req.body.content },
        { overwrite: true },
        function (err, updatedArticle) {
            if (!err) {
                if (updatedArticle === null) {
                    res.send("Article not found")
                } else {
                    res.send("Article Updated")
                }
            } else {
                res.send(err)
            }
        })
}).patch(function (req, res) {
    const articleTitle = req.params.articleTitle;
    Article.update({ title: articleTitle },
        { $set: req.body },
        function (err) {
            if (!err) {
                res.send("Successfully updated article");
            } else {
                res.send(err)
            }
        })
}).delete(function (req, res) { 
    const articleTitle = req.params.articleTitle;
    Article.deleteOne({title: articleTitle}, function(err){
        if(!err){
            res.send('Successfully Deleted');
        }else{
            res.send(err);
        }
    })
 });