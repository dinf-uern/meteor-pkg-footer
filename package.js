Package.describe({
  name: 'dinf:footer',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'componente de rodapé para aplicações',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dinf-uern/meteor-pkg-footer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'templating',
    'underscore'
  ]);

  api.addFiles([
    'lib/modules/footer.js',
    'lib/templates/footer.html',
    'lib/templates/footer.js',
    'lib/stylesheets/footer.css'
  ], ['client']);

  api.addAssets([
    'public/images/dinf-uern-logo.png'
  ], ['client']);

  api.export("Footer", ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dinf:footer');
});
