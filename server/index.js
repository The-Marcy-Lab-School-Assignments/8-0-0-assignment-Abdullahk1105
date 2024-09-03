const express = require('express');
const app = express();

// Controllers
// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
  }
  const serveAbout = (req, res, next) => {
    res.send('<h1>About The site</h1>');
  }
  const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`Hello ${name}`);
  }
  const serveData = (req, res, next) => {
    const data = [{ name: 'Abdullah', age: 18, favoriteFood: 'Cheeseballs'}, { name: 'Fiona', age: 19, favoriteFood: 'Sushi'}, { name: 'Rashell', age: 23, favoriteFood: 'Chicken Tikka Masala'},
         { name: 'Engels', age: 18, favoriteFood: 'Burger King Cheeseburger'},{ name: 'Patrick', age: 24, favoriteFood: 'Oxtail'}, { name: 'Chris', age: 21, favoriteFood: 'Jerk Chicken'},
         { name: 'Cindy', age: 22 , favoriteFood: 'Pho'}, { name: 'SpOoKy AlEx', age: 19, favoriteFood: 'Burger King Cheeseburger'}, { name: 'Mekhi', age: 21, favoriteFood: 'French Fries'}];
    res.send(data);
  }
  
  // endpoints
  app.get('/', serveIndex);
  app.get('/about', serveAbout);
  app.get('/api/hello', serveHello);
  app.get('/api/data', serveData);
  
  // listen
  const port = 8080;
  app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
  
