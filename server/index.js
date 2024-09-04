const express = require('express');

// 1. Import Path
const path = require('path');
// 2. Define a path to the dist folder
const path2dist = path.join(__dirname, '../vite-project/dist')

const app = express();

/////////////////////
// Controllers
/////////////////////

// 3. Create the logRoutes middleware
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};

// 4. Create the serveStatic middleware
const serveStatic = express.static(path2dist);

// "Response" controllers send data to the client
const serveData = (req, res, next) => {
    res.send()
};

const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
}

////////////////////////
// Routes
////////////////////////

// 5. Use both middleware
app.use(logRoutes);
app.use(serveStatic);

app.get('/api/hello', serveHello);
app.get('/api/data', serveData);


const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});