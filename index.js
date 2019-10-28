var conf = require('config');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.render("index", {
        color: conf.color,
        refreshInterval: conf.refreshInterval
    });
});
