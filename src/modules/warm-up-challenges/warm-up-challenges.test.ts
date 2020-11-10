import chai from 'chai'
import WarmUpChallenges from './warm-up-challenges'

const { expect } = chai

describe('warm-up-challenges', () => {
  describe('#salesByMatch', () => {
    it('should return 0 if no matches', () => {
      expect(WarmUpChallenges.salesByMatch(3, [1, 2, 3])).to.equal(0)
    })
    it('should return 0 if an empty array is given', () => {
      expect(WarmUpChallenges.salesByMatch(0, [0])).to.equal(0)
    })
    it('should return 1 if a single match is found', () => {
      expect(WarmUpChallenges.salesByMatch(1, [1, 1])).to.equal(1)
    })
    it('should return 3 if three matches are found', () => {
      expect(WarmUpChallenges.salesByMatch(7, [1, 1, 2, 2, 3, 4, 3])).to.equal(
        3
      )
    })
  })
  describe('#countingValleys', () => {
    it('should return 0 if no valleys', () => {
      expect(WarmUpChallenges.countingValleys(3, 'DDD')).to.equal(0)
    })
    it('should return 1 if there is a single valley', () => {
      expect(WarmUpChallenges.countingValleys(6, 'UDDUUD')).to.equal(1)
    })
    it('should return 0 if there only a mountain', () => {
      expect(WarmUpChallenges.countingValleys(6, 'UUUDDD')).to.equal(0)
    })
  })
  describe('#jumpingOnTheClouds', () => {
    it('should return 0 if no clouds', () => {
      expect(WarmUpChallenges.jumpingOnTheClouds([])).to.equal(0)
    })
    it('should return 3 for given array of clouds', () => {
      expect(
        WarmUpChallenges.jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0])
      ).to.equal(3)
    })
    it('should return 4 for given array of clouds', () => {
      expect(
        WarmUpChallenges.jumpingOnTheClouds([0, 1, 0, 0, 0, 1, 0, 1, 0])
      ).to.equal(4)
    })
  })
  describe('#repeatedString', () => {
    it('should return 0 if not a is found', () => {
      expect(WarmUpChallenges.repeatedString('bbbb', 4)).to.equal(0)
    })
    it('should return 0 if not a is in substring', () => {
      expect(WarmUpChallenges.repeatedString('bbba', 3)).to.equal(0)
    })
    it('should return 4 if a is found in the repeated substring', () => {
      expect(WarmUpChallenges.repeatedString('aab', 6)).to.equal(4)
    })
    it('should return 3 is repeated in the truncated repeated substring', () => {
      expect(WarmUpChallenges.repeatedString('aab', 4)).to.equal(3)
    })
  })
})
