const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
//Database
const db = require('./config/database')
//Test DB
db.authenticate()
    .then(()=> console.log('Database connected...'))
    .catch(err => console.log('err' + err))

const app = express();

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));

//set static 
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/', (req,res) => {
    res.render('index', {layout: 'landing'});
});

//Gigs routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));