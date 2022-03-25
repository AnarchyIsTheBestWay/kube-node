const express = require('express')
const app = express()
const session = require("express-session");
var cors = require("cors")
var key = "mot de passe crypté de fou";
var jwt = require('jsonwebtoken');

//var cookieConfig = require("./CookieConfig");
var maxNumb = 4;

var bodyParser = require('body-parser')
var secret = "qazsedrgyhuijouhygtrdrtfyguhijok"
const cookieConfig = {
    httpOnly: true,
    secure: false,
    sameSite: false,
    expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 365)),
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    credentials: true,
    origin: true,
}))

/*app.use(
    session({
        secret: secret,
        saveUninitialized: true,
        resave: true,
        cookie: {
            httpOnly: false,
            secure: false,
        },
    }),
);*/

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization, Origin, X-Requested-With, Content-Type, Accept');
    //res.cookie('cookie', req.cookies.cookie, cookieConfig);
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        next();
    }
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Hello')
})

app.listen(3001);
console.log("running on 3001");