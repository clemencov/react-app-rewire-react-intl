# react-app-rewire-react-intl

Add the [`babel-plugin-react-intl`](https://github.com/yahoo/babel-plugin-react-intl) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

## Installation

`npm install --save-dev react-app-rewire-react-intl`

## Usage

In the `config-overrides.js` you created for react-app-rewired add this code:

```js
const rewireReactIntl = require('react-app-rewire-react-intl');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactIntl(config, env);
  return config;
}
```

To pass options to the Babel plugin use the third argument, it passes straight through to the plugin:

```js
config = rewireReactIntl(config, env, {
  messagesDir: './build/messages/',
})
```

See [the available options](https://github.com/yahoo/babel-plugin-react-intl#options) in the `babel-plugin-react-intl` documentation.

