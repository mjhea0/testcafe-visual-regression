const path = require('path');
const imageDiff = require('image-diff');
const Selector = require('testcafe').Selector;

fixture('Visual Regression Test')
.page('http://mherman.org/testcafe-visual-regression/02.html');

test('hello, world', async (t) => {
  await t.takeScreenshot('actual');
});
