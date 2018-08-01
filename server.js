var express = require('express');
var app = express();
var path = require('path');


app.set('view engine', 'pug');
app.set('views',  path.join(__dirname, '/views'));

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function(req, res){
    res.render('first-template.pug');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic.pug', {
       user: {
           name: 'Johnny',
           age: "20"
       }
    });
});

app.get('/google', function(req, res){
    res.render('google.pug')
})

app.get('/auth/google', function(req, res){
    res.render('looged.pug', {
        user : {
            name: req.query.username,
            password: req.query.password

        }
    })
})

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});