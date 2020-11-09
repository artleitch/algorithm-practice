require('source-map-support').install()
const { module01 } = require('./modules/module-01/module-01')

exports.jsGym = {
  algorithmOne(a: number, b: number) {
    return a + b
  },

  algorithmTwo(a: number, b: number) {
    return a * b
  },

  module01,
}
export {}
