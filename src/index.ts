require('source-map-support').install()
const { module01 } = require('./modules/module01/module01')
const { module02 } = require('./modules/module02/module02')

exports.jsGym = {
  module01,
  module02,
}
export {}
