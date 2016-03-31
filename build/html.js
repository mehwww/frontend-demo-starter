const Promise = require('bluebird')
const Handlebars = require('handlebars')
const path = require('path')
const fs = Promise.promisifyAll(require('fs'))

module.exports = function () {
  return Promise.all([
    fs.readFileAsync(path.resolve(__dirname, '../src/html.html')),
    fs.readFileAsync(path.resolve(__dirname, './template.hbs'))
  ])
  .map((buf) => buf.toString())
  .spread((body, template) => Handlebars.compile(template)({body}))
}
