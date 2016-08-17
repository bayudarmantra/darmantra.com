/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /* Bootstrap */
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });

  /* Font Awesome */
  app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });

  /*Moment Js*/
  app.import(app.bowerDirectory + '/moment/min/moment-with-locales.js');

  return app.toTree();
};
