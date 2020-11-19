import chai from 'chai'
import Stacks from './stacks'

const { expect } = chai

describe('Stacks', () => {
  describe('#balancedBrackets', () => {
    it('should return the correct response for the string', () => {
      const s = '{[()]}'
      expect(Stacks.balancedBrackets(s)).to.eql('YES')
    })
    it('should return the correct response for the string', () => {
      const s = '{[(])}'
      expect(Stacks.balancedBrackets(s)).to.eql('NO')
    })
    it('should return the correct response for the string', () => {
      const s = '{{[[(())]]}}'
      expect(Stacks.balancedBrackets(s)).to.eql('YES')
    })
    it('should return the correct response for the string', () => {
      const s = '{{([])}}'
      expect(Stacks.balancedBrackets(s)).to.eql('YES')
    })
    it('should return the correct response for the string', () => {
      const s = '{{)[](}}'
      expect(Stacks.balancedBrackets(s)).to.eql('NO')
    })
    it('should return the correct response for the string', () => {
      const s = '{(([])[])[]}'
      expect(Stacks.balancedBrackets(s)).to.eql('YES')
    })
    it('should return the correct response for the string', () => {
      const s = '{(([])[])[]]}'
      expect(Stacks.balancedBrackets(s)).to.eql('NO')
    })
    it('should return the correct response for the string', () => {
      const s = '}][}}(}][))]'
      expect(Stacks.balancedBrackets(s)).to.eql('NO')
    })
  })
})
export {}
