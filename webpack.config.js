const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'gilj_tutorial',
    projectName: 'musicians2',
    webpackConfigEnv,
  })

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  })
}