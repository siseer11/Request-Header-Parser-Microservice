// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami" , (req,res) => {
  const ipAdress = req.headers['x-forwarded-for'].match(/\d+\.\d+\.\d+\.\d+/)[0];
  const language = req.headers['accept-language'];
  const userAgent = req.headers['user-agent'];
  res.status(200).json({
    "ipaddress":ipAdress,
    "language":language,
    "software":userAgent
  })
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
