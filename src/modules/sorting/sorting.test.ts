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
  describe('#fraudulentActivitiyNotifications', () => {
    it('should return 1 for a limited number of expenditures', () => {
      const arr = [10, 20, 30, 40, 50]
      expect(Sorting.fraudulentActivitiyNotifications(arr, 3)).to.equal(1)
    })
    it('should return 2 for a limited number of expenditures', () => {
      const arr = [2, 3, 4, 2, 3, 6, 8, 4, 5]
      expect(Sorting.fraudulentActivitiyNotifications(arr, 5)).to.equal(2)
    })
    it('should return 0 for a limited number of expenditures', () => {
      const arr = [1, 2, 3, 4, 4]
      expect(Sorting.fraudulentActivitiyNotifications(arr, 4)).to.equal(0)
    })
  })
  describe('#countingInversions', () => {
    it('should return 0 for a sorted array', () => {
      const arr = [10, 20, 30, 40, 50]
      expect(Sorting.countingInversions(arr)).to.equal(0)
    })
    it('should return 1 for a slightly unsorted array', () => {
      const arr = [10, 20, 30, 50, 40]
      expect(Sorting.countingInversions(arr)).to.equal(1)
    })
    it('should return 4 for an unsorted array', () => {
      const arr = [2, 1, 3, 1, 2]
      expect(Sorting.countingInversions(arr)).to.equal(4)
    })
  })
})
export {}
