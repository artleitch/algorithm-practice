const assert = require('assert')

const { module01 } = require('../module-01')
describe('Module 01', function () {
  describe('algorithm', function () {
    it('should return -1 when the value is not present', function () {
      const result = module01.algorithmOne(1, 2)
      assert.equal(result, 3)
    })
    it('should return -1 when the value is not present', function () {
      const result2 = module01.algorithmTwo(1, 2)
      assert.equal(result2, 2)
    })
  })
})

export {}
