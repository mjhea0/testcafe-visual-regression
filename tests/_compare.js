const path = require('path');
const imageDiff = require('image-diff');

function compareImages() {
  return new Promise((resolve, reject) => {
    const options = {
      actualImage: path.join(__dirname, 'screenshots', 'actual.png'),
      expectedImage: path.join(__dirname, 'screenshots', 'base.png'),
      diffImage: path.join(__dirname, 'screenshots', 'diff.png')
    };
    imageDiff(options, (err, imagesAreSame) => {
      if (err) reject(err);
      resolve(imagesAreSame);
    });
  });
}

module.exports = {
  compareImages
};
