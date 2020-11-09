require('source-map-support').install()

exports.module01 = {
  algorithmOne(a: number, b: number) {
    return a + b
  },

  algorithmTwo(a: number, b: number) {
    return a * b
  },
}
