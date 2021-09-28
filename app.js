var mysql = require('mysql');
var express = require('express');
var app = express();

app.use(express.static('Views'))  // making the views folder public to send css files
app.set('view engine', 'pug')


app.get('/login',function(req,res){
    res.render('login')
})

app.get('/UserAccount',function(req,res){
    if(req.query.Username){  // to avoid empty string toUppercase error (Empty fields)
        let username=format_str(req.query.Username)  // formating the string
        let password=req.query.Password
        if(username.toLowerCase() == "shalom" && password=="SH@lom&g0d"){
            res.render('UserAccount', { name: username})
        }
        else{
            res.render('login', { Failed:1}) //setting failed to 1 to show the Bad password err
        }
    }
    else{
        res.render('login', { Failed:1})
    }
})

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});

//Any String to Format like sHaLom >> Shalom
function format_str(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }