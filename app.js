require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static folderse(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layouyt', './layouts/main');
app.set('view engine', 'ejs');

//Routes 
app.use('/', require('./server/routes/index'))
app.get('/', function(req, res){
    const locals = {
        title: 'EventServe',
        descreption: 'Volunteering hub for seasonal events'
    }
    res.render('index',locals);
});

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})