Package.describe({
  name: 'donflopez:gitlab-api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Gitlab Api for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:donflopez/gitlab-api.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  gitlab: '1.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.addFiles('gitlab-api.js', 'server');
  api.export('Gitlab');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('donflopez:gitlab-api');
  api.addFiles('gitlab-api-tests.js');
});
