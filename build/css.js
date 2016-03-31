'use strict'

const Promise = require('bluebird')
const sass = require('node-sass')
const path = require('path')

module.exports = function () {
  return new Promise((resolve, reject) => {
    sass.render({
      file: path.resolve(__dirname, '../src/scss.scss')
    }, (error, result) => {
      resolve(result.css.toString())
    })
  })
}
