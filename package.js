Package.describe({
  name: 'mvolkmann:date-time-utils',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'utility functions for dates and times',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/mvolkmann/meteor-date-time-utils',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(api => {
  api.versionsFrom('1.11');
  api.use('ecmascript');
  api.mainModule('date-time-utils.js');
});

Package.onTest(api => {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mvolkmann:date-time-utils');
  api.mainModule('date-time-utils-tests.js');
});
