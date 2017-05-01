const fs = require('fs');
const path = require('path');
const imageDiff = require('image-diff');

const config = require('./_config.json');

function compareImages(num, title) {
  return new Promise((resolve, reject) => {
    const options = {
      actualImage: path.join(
        __dirname, '..', 'tests', 'screenshots', `${num}-${title}-actual.png`),
      expectedImage: path.join(
        __dirname, '..', 'tests', 'screenshots', `${num}-${title}-base.png`),
      diffImage: path.join(
        __dirname, '..', 'tests', 'screenshots', `${num}-${title}-diff.png`)
    };
    imageDiff(options, (err, imagesAreSame) => {
      if (err) reject(err);
      resolve(imagesAreSame);
    });
  });
}

function getImages() {
  const dir = path.join(__dirname, '..', 'tests', 'screenshots');
  const files = fs.readdirSync(dir);
  const fileList = [];
  files.forEach((file) => {
    if (path.extname(file) === '.png' && !dir.includes('thumbnails')) {
      fileList.push(file);
    }
  });
  return fileList;
}

function generateObject(images) {
  return config.map((el) => {
    el.images = images.filter((image) => {
      const imageNum = image.split('-')[0];
      return parseInt(imageNum) === parseInt(el.id);
    });
    return el;
  });
}

module.exports = {
  compareImages,
  getImages,
  generateObject,
};
