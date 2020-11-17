import chai from 'chai'
import Search from './search'

const { expect } = chai

describe('Sorting', () => {
  describe('#whatFlavors', () => {
    it('should return the correct positions for the costs', () => {
      const arr = [1, 4, 5, 3, 2]
      expect(Search.whatFlavors(arr, 4)).to.eql('1 4')
    })
    it('should return the correct positions for the costs', () => {
      const arr = [2, 2, 1, 5, 4]
      expect(Search.whatFlavors(arr, 4)).to.eql('1 2')
    })
    it('should return the correct positions for the costs', () => {
      const arr = [2, 2, 4, 3]
      expect(Search.whatFlavors(arr, 4)).to.eql('1 2')
    })
    it('should return the correct positions for the costs', () => {
      const arr = [1, 2, 3, 5, 6]
      expect(Search.whatFlavors(arr, 5)).to.eql('2 3')
    })
    it('should return the correct positions for the costs', () => {
      const arr = [4, 3, 2, 5, 7]
      expect(Search.whatFlavors(arr, 8)).to.eql('2 4')
    })
    it('should return the correct positions for the costs', () => {
      const arr = [7, 2, 5, 4, 11]
      expect(Search.whatFlavors(arr, 12)).to.eql('1 3')
    })
  })
})
export {}
