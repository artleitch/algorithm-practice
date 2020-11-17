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
  describe('#markAndToys', () => {
    it('should return 2 for a limited number of affordable toys', () => {
      const arr = [1, 2, 3]
      expect(Sorting.markAndToys(arr, 4)).to.equal(2)
    })
    it('should return 2 for a limited number of unsorted affordable toys', () => {
      const arr = [3, 2, 1]
      expect(Sorting.markAndToys(arr, 4)).to.equal(2)
    })
    it('should return 0 when none are affordable', () => {
      const arr = [3, 4, 5]
      expect(Sorting.markAndToys(arr, 2)).to.equal(0)
    })
    it('should return the length of the prices array when all are affordable', () => {
      const arr = [3, 4, 5]
      expect(Sorting.markAndToys(arr, 12)).to.equal(3)
    })
    it('should return 4 for an unsorted list', () => {
      const arr = [1, 12, 5, 111, 200, 1000, 10]
      expect(Sorting.markAndToys(arr, 50)).to.equal(4)
    })
  })
})
export {}