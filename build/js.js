const Promise = require('bluebird')
const babel = require("babel-core")
const path = require('path')

module.exports = function () {
  return new Promise((resolve, reject) => {
    babel.transformFile(
      path.resolve(__dirname, '../src/js.js'),
      {presets: ['es2015', 'stage-0']},
      (error, result) => resolve(result.code)
    )
  })
}
