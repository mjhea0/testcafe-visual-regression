const path = require('path');
const imageDiff = require('image-diff');

function compareImages() {
  const options = {
    actualImage: path.join(__dirname, 'screenshots', 'actual.png'),
    expectedImage: path.join(__dirname, 'screenshots', 'base.png'),
    diffImage: path.join(__dirname, 'screenshots', 'diff.png')
  };
  imageDiff(options, (err, imagesAreSame) => {
    if (err) console.log(err);
    console.log(`Same? ${imagesAreSame}`);
  });
}

compareImages();
