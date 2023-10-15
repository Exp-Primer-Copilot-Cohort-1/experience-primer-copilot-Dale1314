// Create web server
// run: node comment.js
// Access: http://localhost:3000

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comment', function(req, res){
  res.send('<form method="post" action="/comment">' +
    '<textarea name="comment"></textarea>' +
    '<br><input type="submit" value="Submit">' +
    '</form>');
});

app.post('/comment', function(req, res){
  res.send('Thank you for your comment!');
  console.log(req.body.comment);
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');