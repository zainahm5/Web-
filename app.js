require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static folder
app.use(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layouyt', './layouts/main');
app.set('view engine', 'ejs');

app.get('/' , function(req, res){
    res.render('index', { title: "Home Page" });
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})