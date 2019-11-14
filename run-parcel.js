const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler(['index.html', 'pages/main/main.html', 'pages/participants/participants.html', 'pages/institute/institute.html', 'pages/about/about.html']);
const app = express();

app.get('/', (req, res, next) => {
  req.url = '/index.html';
  app._router.handle(req, res, next);
});

app.use(bundler.middleware());

const port = Number(process.env.PORT || 1234);
app.listen(port);
console.log(`listening at http://localhost:${port}`);