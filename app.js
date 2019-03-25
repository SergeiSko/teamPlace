//Express
var express = require('express');
var app = express();
const port = 2000;
app.use(express.static(__dirname + '/public'));

//Parser
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

var nodemailer = require('nodemailer');
let sendGmail = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "skoblin.s98@gmail.com",
      pass: "F_ybk_jr_C_1"
    }
});

//API сайта
app.get('/', function(req, res){
  res.sendfile("./public/index.html");
});

app.get('/faq', function(req, res){
  res.sendfile("./public/faq.html");
});

app.get('/progress', function(req, res){
  res.sendfile("./public/progress.html");
});

app.get('/projects', function(req, res){
  res.sendfile("./public/projects.html");
});

app.get('/recruitment', function(req, res){
  res.sendfile("./public/recruitment.html");
});

app.get('/recruitment', function(req, res){
  res.sendfile("./public/recruitment.html");
});

app.post('/send', parser, function(req, res){
  sendGmail.sendMail({
    from: "skoblin.s98@gmail.com",
    to: "skoblin.s98@gmail.com",
    subject: "new worker",
    html: `<html><body><table>
    <tr><td>name: ${req.body.senderName}</td><tr>
    <tr><td>mail: ${req.body.senderMail}</td></tr>
    </table></body></html>`
  });
  res.send("<html><body>Мы вам ответим в ближайшее время.<br><a href=\'/\'>вернутся на главную</a></body><html>")
});

//Слушатель порта
app.listen(port, function(){
  console.log("Server listening port: " + port);
})
