require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

var baseDOM = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>';
var jsdom = require('jsdom').JSDOM;
global.document = new jsdom(baseDOM);
global.window   = document.defaultView;
if ( global.self != null) {
  console.log(' global.self >>>>> ' + global.self);
} else {
  global.self = global.this;
}
global.navigator = {
  userAgent: 'node.js'
};