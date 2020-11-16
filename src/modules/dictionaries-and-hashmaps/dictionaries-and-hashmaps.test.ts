import { expect } from 'chai'
import DictionariesAndHashmaps from './dictionaries-and-hashmaps'

describe('DictionariesAndHashmaps', function () {
  describe('#countTriples', function () {
    it('should return 2 for given array', function () {
      expect(DictionariesAndHashmaps.countTriplets([1, 2, 2, 4], 2)).to.equal(2)
    })
    it('should return 6 for given array', function () {
      expect(
        DictionariesAndHashmaps.countTriplets([1, 3, 9, 9, 27, 81], 3)
      ).to.equal(6)
    })
    it('should return 0 for an array that is too short', function () {
      expect(DictionariesAndHashmaps.countTriplets([1, 3], 3)).to.equal(0)
    })
    it('should return 161700 for given array', function () {
      expect(
        DictionariesAndHashmaps.countTriplets(
          [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
          ],
          1
        )
      ).to.equal(161700)
    })
  })
})
export {}
