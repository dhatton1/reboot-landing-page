const express = require('express');
const path = require('path');
const {sendEmail} = require('./mailer');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/home.html'));
});

app.get('/ideal-career', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/project-details.html'));
});

app.get('/mba-style-learing', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/project-details.html'));
});

app.get('/adventure-and-wellbeing', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/adventure-and-wellbeing.html'));
});

app.get('/launch-startup', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/project-details.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/contact.html'));
});

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/news.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/about.html'));
})

app.post('/sendMail', (req, res) => {
  sendEmail(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})