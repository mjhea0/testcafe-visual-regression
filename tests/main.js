const path = require('path');
const Selector = require('testcafe').Selector;

const compareImages = require('./_compare').compareImages;

// get image name
var imageName = 'actual';
if (process.env.type === 'base') imageName = 'base';

fixture('Visual Regression Test')
.page('http://mherman.org/testcafe-visual-regression/02.html');

test('hello, world', async (t) => {
  await t.takeScreenshot(imageName);
  if (!await compareImages()) {
    throw new Error('Images are different');
  }
});
