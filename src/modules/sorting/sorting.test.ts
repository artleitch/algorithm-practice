import chai from 'chai'
import Sorting from './sorting'

const { expect } = chai

describe('Sorting', () => {
  describe('#bubbleSort', () => {
    it('should return 0 for a sorted array', () => {
      const arr = [1, 2, 3]
      expect(Sorting.bubbleSort(arr)).to.equal(0)
    })
    it('should return 3 for a specific unsorted array', () => {
      const arr = [3, 2, 1]
      expect(Sorting.bubbleSort(arr)).to.equal(3)
    })
  })
})
export {}
