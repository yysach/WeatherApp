const express = require('express');
const express_ejs_layouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 3000

app.use(express_ejs_layouts);
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static('views')); // inorder to use views/js/app.js


// express session middleware
app.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: true
  }));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.error_msg = req.flash("error_msg");
    next();
})

app.use('/',require('./routes/index'));

app.listen(PORT,()=>{
    console.log("listening on port "+PORT);
})
