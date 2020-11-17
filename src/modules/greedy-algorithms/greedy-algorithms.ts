/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class GreedyAlgorithms {
  /**
   * @name
   * @description
   * Complete the minimumAbsoluteDifference function in the editor below. It should return an integer that represents the minimum absolute difference between any pair of elements.
   *
   * minimumAbsoluteDifference has the following parameter(s):
   * arr: an array of integers
   *
   * [Original challenge](https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms)
   *
   * @param arr An array of integers
   * @returns Total number of swaps made in sorting
   */
  static minimumDiffInArray(arr: number[]): number {
    return arr
      .sort((a, b) => {
        return a - b
      })
      .reduce((acc, el, i, arr) => {
        if (i) {
          return Math.min(acc, Math.abs(el - arr[i - 1]))
        }
        return acc
      }, Infinity)
  }
}

export default GreedyAlgorithms
