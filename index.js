
const modifyBabelPreset = require('modify-babel-preset')

module.exports = modifyBabelPreset('es2015',{
  'transform-regenerator': false,
  'transform-async-to-module-method': {'module': 'co', 'method': 'wrap'},
})
