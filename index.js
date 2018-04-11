const { injectBabelPlugin } = require('react-app-rewired');

function rewireReactIntl(config, env, reactIntlPluginOptions = {}) {
  return injectBabelPlugin(['react-intl', reactIntlPluginOptions], config);
}

module.exports = rewireReactIntl;
