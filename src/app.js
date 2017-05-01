const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');

const compare = require('./compare');

const app = express();
const templatePath = path.join(__dirname, 'views');
const screenshots = path.join(__dirname, '..', 'tests', 'screenshots');

nunjucks.configure(templatePath, {
  autoescape: true,
  express: app
});

app.use(express.static(screenshots));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  const allImages = compare.getImages();
  res.render('index.html', {
    images: compare.generateObject(allImages)
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started on port', app.get('port'));
});
