import chai from 'chai'
import Arrays from './arrays'

const { expect } = chai

describe('Array', () => {
  describe('#ds2DArray', () => {
    it('should calculate the correct amount, given a 2D array', () => {
      const testArray = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ]
      expect(Arrays.ds2DArray(testArray)).to.equal(19)
    })
    it('should return 0, given a 2D array with no values', () => {
      const testArray = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]
      expect(Arrays.ds2DArray(testArray)).to.equal(0)
    })
  })
})
export {}
