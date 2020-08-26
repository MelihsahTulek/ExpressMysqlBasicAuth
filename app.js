const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
//
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
// BODY PARSER
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(session({
    secret:'myApp',
    resave: false,
    saveUninitialized: true
}));
// USE ROUTERS
const signUp = require('./routers/signUpRouter');
app.use('/', signUp)

const signIn = require('./routers/signInRouter');
app.use('/', signIn)

app.use('*', (req,res) => {
    res.render('signUp')
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.