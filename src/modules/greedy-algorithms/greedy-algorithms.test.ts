import chai from 'chai'
import GreedyAlgorithms from './greedy-algorithms'

const { expect } = chai

describe('GreedyAlgorithms', () => {
  describe('#minimumDiffInArray', () => {
    it('should return 3 for relevant array', () => {
      const arr = [1, -3, 71, 68, 17]
      expect(GreedyAlgorithms.minimumDiffInArray(arr)).to.equal(3)
    })
    it('should return 1 for relevant array', () => {
      const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]
      expect(GreedyAlgorithms.minimumDiffInArray(arr)).to.equal(1)
    })
  })
  describe('#candies', () => {
    it('', () => {
      const arr = []
      // expect(GreedyAlgorithms.minimumDiffInArray(arr)).to.equal(3)
    })
  })
  describe('#maximumPerimeterTriangle', () => {
    it('', () => {
      const arr = []
      // expect(GreedyAlgorithms.minimumDiffInArray(arr)).to.equal(3)
    })
  })
  describe('#gridChallenge', () => {
    it('', () => {
      const arr = []
      // expect(GreedyAlgorithms.minimumDiffInArray(arr)).to.equal(3)
    })
  })
  describe('#marcsCakewalk', () => {
    it('should return the minimum calories', () => {
      const arr = [7, 4, 9, 6]
      expect(GreedyAlgorithms.marcsCakewalk(arr)).to.equal(79)
    })
  })
  describe('#greedyFlorist', () => {
    it('should return the minimum price', () => {
      const arr = [1, 3, 5, 7, 9]
      expect(GreedyAlgorithms.greedyFlorist(3, arr)).to.equal(29)
    })
  })
  describe('#markAndToys', () => {
    it('should return correct number of toys', () => {
      const arr = [1, 12, 5, 111, 200, 1000, 10]
      expect(GreedyAlgorithms.markAndToys(arr, 50)).to.equal(4)
    })
  })
})
export {}
