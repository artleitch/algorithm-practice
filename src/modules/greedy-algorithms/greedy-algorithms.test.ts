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
})
export {}
