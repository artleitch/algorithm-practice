/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class Search {
  /**
   * @name whatFlavors
   * @description
   * Given an array of costs, find the combination that would add up to the
   * given amount, with the answer given as the 1-based indices of the costs
   *
   * [Original challenge](https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search)
   *
   * @param cost The array of costs
   * @param money The amount of money to use
   * @returns The 1-based indices of the costs the fulfil the money given
   */
  static whatFlavors(cost: number[], money: number): string {
    // sort, trim off any above money
    // go through each and check for whether the associated number is at end of
    // array
    const priceHash = new Map()
    const sortedCost = cost
      .filter((a, i) => {
        if (!priceHash.get(a) && priceHash.get(a) !== 0) priceHash.set(a, i + 1)
        else priceHash.set(a, [priceHash.get(a), i + 1])
        return a < money
      })
      .sort((a, b) => a - b)
    let desiredCombination: number[] = []
    for (let i = 0; i < sortedCost.length; i++) {
      const desiredNumber = money - sortedCost[i]
      for (let j = sortedCost.length - 1; j > 0; j--) {
        if (+sortedCost[j] === +desiredNumber) {
          if (typeof priceHash.get(sortedCost[i]) === 'number') {
            desiredCombination[0] = priceHash.get(sortedCost[i])
            desiredCombination[1] = priceHash.get(sortedCost[j])
          } else {
            desiredCombination = priceHash.get(sortedCost[i]).slice()
          }
        }
        if (sortedCost[j] < desiredNumber) {
          break
        }
      }
      if (desiredCombination.length) {
        break
      }
    }
    return desiredCombination.sort((a, b) => a - b).join(' ')
  }
}

export default Search
