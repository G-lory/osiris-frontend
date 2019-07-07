const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#7b88ff' },
  }),
  addWebpackAlias({
    'src': path.resolve(__dirname, 'src'),
    'styles': path.resolve(__dirname, 'src/styles'),
    'containers': path.resolve(__dirname, 'src/containers'),
    'components': path.resolve(__dirname, 'src/components'),
  }),
);