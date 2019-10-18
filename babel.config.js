module.exports = function (api) {
  api.cache(true);

  //const presets = [ ... ];
  const plugins = [
    require('@babel/preset-env'),
    require('babel-preset-minify')
  ];

  return {
    //presets,
    plugins
  };
}
