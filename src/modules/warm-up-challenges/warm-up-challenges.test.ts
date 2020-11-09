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
  describe('#countingValleys', function () {
    it('should return 0 if no valleys', function () {
      expect(WarmUpChallenges.countingValleys(3, 'DDD')).to.equal(0)
    })
    it('should return 1 if there is a single valley', function () {
      expect(WarmUpChallenges.countingValleys(6, 'UDDUUD')).to.equal(1)
    })
    it('should return 0 if there only a mountain', function () {
      expect(WarmUpChallenges.countingValleys(6, 'UUUDDD')).to.equal(0)
    })
  })
  describe('#jumpingOnTheClouds', function () {
    it('should return 0 if no clouds', function () {
      expect(WarmUpChallenges.jumpingOnTheClouds([])).to.equal(0)
    })
    it('should return 3 for given array of clouds', function () {
      expect(
        WarmUpChallenges.jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0])
      ).to.equal(3)
    })
    it('should return 4 for given array of clouds', function () {
      expect(
        WarmUpChallenges.jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0, 1, 0])
      ).to.equal(4)
    })
  })
  describe('#repeatedString', function () {
    it('should return 0 if not a is found', function () {
      expect(WarmUpChallenges.repeatedString('bbbb', 4)).to.equal(0)
    })
    it('should return 0 if not a is in substring', function () {
      expect(WarmUpChallenges.repeatedString('bbba', 3)).to.equal(0)
    })
    it('should return 4 if a is found in the repeated substring', function () {
      expect(WarmUpChallenges.repeatedString('aab', 6)).to.equal(4)
    })
    it('should return 3 is repeated in the truncated repeated substring', function () {
      expect(WarmUpChallenges.repeatedString('aab', 4)).to.equal(3)
    })
  })
})
export {}
