const assert = require('assert')
const chai = require('chai')
const expect = chai.expect
const { WarmUpChallenges } = require('./warm-up-challenges')

describe('warm-up-challenges', function () {
  describe('#salesByMatch', function () {
    it('should return 0 if no matches', function () {
      expect(WarmUpChallenges.salesByMatch(3, [1, 2, 3])).to.equal(0)
    })
    it('should return 0 if an empty array is given', function () {
      expect(WarmUpChallenges.salesByMatch(0, [0])).to.equal(0)
    })
    it('should return 1 if a single match is found', function () {
      expect(WarmUpChallenges.salesByMatch(1, [1, 1])).to.equal(1)
    })
    it('should return 3 if three matches are found', function () {
      expect(WarmUpChallenges.salesByMatch(7, [1, 1, 2, 2, 3, 4, 3])).to.equal(
        3
      )
    })
  })
})
export {}
