const path = require('path');
const imageDiff = require('image-diff');

function compareImages(title) {
  return new Promise((resolve, reject) => {
    const options = {
      actualImage: path.join(
        __dirname, 'tests', 'screenshots', `${title}-actual.png`),
      expectedImage: path.join(
        __dirname, 'tests', 'screenshots', `${title}-base.png`),
      diffImage: path.join(
        __dirname, 'tests', 'screenshots', `${title}-diff.png`)
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
