'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },
    // Add options here
    includeFileExtensionInSnippetNames: false,
    'ember-prism': {
      plugins: ['line-numbers', 'line-highlight'],
      theme: 'okaidia',
      components: ['markup'],
    },
  });

  return app.toTree();
};
