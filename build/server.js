'use strict'

const express = require('express')
const app = express()
const bs = require("browser-sync").create()
const html = require('./html')
const css = require('./css')
const js = require('./js')

const resolve = function () {
  return require('path').resolve.apply(null, [].concat(__dirname, Array.from(arguments)))
}

app.get('/', (req, res) => {
  res.type('html')
  html().then((t) => res.send(t))
})

app.get('/css.css', (req, res) => {
  res.type('css')
  css().then((t) => res.send(t))
})

app.get('/js.js', (req, res) => {
  res.type('js')
  js().then((t) => res.send(t))
})


bs.init({
  server: {baseDir: []},
  middleware: [app],
  files: [
    resolve('../src/*.js'),
    resolve('../src/*.html'),
    {match: resolve('../src/*.scss'), fn: () => bs.reload("*.css")}
  ]
})
