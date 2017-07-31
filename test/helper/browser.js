require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

var baseDOM = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><div id="container"></div></body></html>`;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const doc = new JSDOM(baseDOM);
const win = doc.window;

global.document = win.document;
global.window = win;
if ( global.self != null) {
  console.log(' global.self >>>>> ' + global.self);
} else {
  global.self = global.this;
}
global.navigator = {
  userAgent: 'node.js'
};