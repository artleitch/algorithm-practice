const assert = require('assert')
const { jsGym } = require('../index')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      const result = jsGym.algorithmOne(1, 2)
      assert.equal(result, 3)
    })
    it('should return -1 when the value is not present', function () {
      const result2 = jsGym.algorithmTwo(1, 2)
      assert.equal(result2, 2)
    })
  })
})
