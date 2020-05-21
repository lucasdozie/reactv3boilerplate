
require('dotenv').config()

const 
  express = require('express'),
  path = require('path'),  
  morgan = require('morgan'),
  fs = require('fs'),
  app = express();

const SERVER_PORT = process.env.PORT || process.env.SERVER_PORT;

// console.log("================================")
// console.log({SERVER_PORT})
// console.log("================================")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if(process.env.NODE_ENV != 'production') {
  app.use(morgan("combined"));
} else {
  // create a write stream (in append mode)
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
  });
  app.use(morgan('combined', { stream: accessLogStream }));
}

// app.use(function(req, res, next){
//   console.log("+++++++++++++===========================+++++++++++++++++++++")
//   console.log('https://' + req.hostname + req.url)
//   console.log("+++++++++++++===========================+++++++++++++++++++++2")

//   if (req.headers['x-forwarded-proto'] === 'http'){
//       res.redirect ('https://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });

// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
// }

app.listen(SERVER_PORT, () => {
  console.log('server up on port ' + SERVER_PORT);
});