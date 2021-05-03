const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const path = require('path');
const {stringify} = require('querystring');
const https = require('https');
const bodyParser = require('body-parser');
const users = require('./data/users.json');
const sessions = require('./data/sessions.json');

const options = {
  key: fs.readFileSync("./ssl/cert.key"),
  cert: fs.readFileSync("./ssl/cert.pem")
};

const port = "3000";

validatePassword = (password) =>{
  return /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && password.length >= 8 && password.length <= 20;
};

saveUser = () =>{
  fs.writeFile('./data/users.json', JSON.stringify(users), (err) =>{
    if(err != undefined){
      console.log(`Error on writing registering user : ${err}`)
    };
  });
  console.log("new user written to users.JSON")
};

saveSession = (sessions) =>{
  fs.writeFile(sessions, JSON,stringify(sessions), { flag: 'a+' }, (err) =>{
    if(err != undefined){
      console.log(`Error on writing saving sessions : ${err}`)
    };
  });
};

const server = https.createServer(options, app)
  .listen(port, () =>{
    console.log(`server started on ${port}`)
  })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) =>{
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

app.post("/login/auth", (req, res) =>{
  var username = req.body.username;
  var password = req.body.password;
  var user = users[username];

  if(username === "" || password === ""){
    res.sendStatus(422);
    return
  }
  else if(user == undefined){
    res.sendStatus(404);
    return
  }
  else if(!bcrypt.compareSync(password, user.credentials.password)){
    res.sendStatus(401);
    return
  };

  user = JSON.parse(JSON.stringify(user));
  var token = jwt.sign({username: user.contact.username}, "my_secret_key");
  res.end(JSON.stringify({access_token: token, user: user}));
});

app.post("/register/auth", (req, res) =>{
  var username = req.body.username;
  var password = req.body.password;
  var user = users[username];

  if(username === "" || password === ""){
    res.sendStatus(422);
    return
  }
  else if(user !== undefined){
    res.sendStatus(409);
    return
  }
  else if(!validatePassword(password)){
    res.sendStatus(401);
    return
  }

  users[username] = {
      contact: {
        username: username,
      },
      credentials:{
        password: bcrypt.hashSync(password, 10),
      },
    };

  saveUser()
  res.redirect(307, "/login/auth")
});

app.post("/create/send", (req, res) =>{
  var host = req.body.host;
  var usernames = req.body.usernames;
  var link = req.body.link;

  for(var username in usernames){
    sessions[username].sessions.push({
      host: host,
      link: link
    });
  };

  saveSession(sessions)
});



