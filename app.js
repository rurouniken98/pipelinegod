const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('mysql');
const path = __dirname + '/views/';
const port = 8080;
// Importing module
 
const connection = mysql.createConnection({
    host: "172.16.67.87",
    user: "root",
    password: "Netpoleon#1",
    database: "sharkslist"
})
 
// Connecting to database
connection.connect(function (err) {
    if (err) {
        console.log("Error in the connection")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        connection.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`)
                else
                    console.log("Result: ", result)
            })
    }
});

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  res.sendFile(path + 'sharks.html');
});

router.get('/sharkslists', function(req,res){
  res.sendFile(path + 'sharkslists.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
