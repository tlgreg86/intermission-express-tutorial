const express = require('express');
const app     = express();
const path    = require('path');
const stateCoordinates = require('./public/stateCoordinates');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/sunsets', (request, response) => {
  response.send(
    `<img src="./images/sunset.jpeg" width="400" />
     <img src="./images/sunset1.jpeg" width="400" />
     <img src="./images/sunset2.jpeg" width="400" />
     <img src="./images/sunset3.jpeg" width="400" />
     <img src="./images/sunset4.jpeg" width="400" />
     <img src="./images/sunset5.jpeg" width="400" />
     <img src="./images/sunset6.jpeg" width="400" />`
   );
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.get('/json', (request, response) => {
  response.status(200).json(stateCoordinates);
});
