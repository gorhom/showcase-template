const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const { resolver } = require('./metro.config');

const root = path.resolve(__dirname, '..');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/,
    include: path.resolve(root, 'src'),
    use: 'babel-loader',
  });

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    react: path.join(node_modules, 'react'),
    'react-native': path.join(node_modules, 'react-native'),
    'react-native-web': path.join(node_modules, 'react-native-web'),
  });

  return config;
};
