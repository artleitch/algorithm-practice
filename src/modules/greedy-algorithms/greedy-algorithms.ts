/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class GreedyAlgorithms {
  /**
   * @name
   * @description
   * Complete the minimumAbsoluteDifference function in the editor below. It
   * should return an integer that represents the minimum absolute difference
   * between any pair of elements.
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
      .reduce((acc, el, i, arrIterate) => {
        if (i) {
          return Math.min(acc, Math.abs(el - arrIterate[i - 1]))
        }
        return acc
      }, Infinity)
  }

  /**
   * @name candies
   * @description
   * Alice is a kindergarten teacher. She wants to give some candies to the
   * children in her class.  All the children sit in a line and each of them
   * has a rating score according to his or her performance in the class. Alice
   *  wants to give at least 1 candy to each child. If two children sit next to
   * each other, then the one with the higher rating must get more candies.
   * Alice wants to minimize the total number of candies she must buy.
   * [Original challenge](https://www.hackerrank.com/challenges/candies/problem)
   *
   * @param n Dumber of students
   * @param arr An array of students results
   * @returns Minimum number of candies needed
   */
  static candies(n: number, arr: number[]): number {
    const size = arr.length
    const arrLTR: number[] = []
    for (let i = 0; i < size; i++) {
      const curr = arr[i]
      const prev = arr[i - 1]
      if (i === 0) {
        arrLTR[i] = 1
      } else if (curr > prev) {
        arrLTR[i] = arrLTR[i - 1] + 1
      } else {
        arrLTR[i] = 1
      }
    }

    const arrRTL: number[] = []
    for (let j = size - 1; j >= 0; j--) {
      const curr = arr[j]
      const prev = arr[j + 1]
      if (j === size - 1) {
        arrRTL[j] = 1
      } else if (curr > prev) {
        arrRTL[j] = arrRTL[j + 1] + 1
      } else {
        arrRTL[j] = 1
      }
    }

    let sum = 0
    for (let k = 0; k < size; k++) {
      sum += Math.max(arrLTR[k], arrRTL[k])
    }
    return sum
  }

  /**
   * @name maximumPerimeterTriangle
   * @description
   * Given an array of stick lengths, use 3 of them to construct a
   * non-degenerate triange with the maximum possible perimeter. Print the
   * lengths of its sides as space-separated integers in non-decreasing order.
   * [Original challenge](https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem)
   *
   * @param
   * @returns
   */
  static maximumPerimeterTriangle(sticks: number[]): number {
    // triangle already sorted
    function isValidTriangle(triangle) {
      return triangle[1] + triangle[2] > triangle[0]
    }

    // order descending
    // test all combinations until a valid triangle is found
    const sortedSticks = sticks.sort((a, b) => b - a)
    let perimiter = -Infinity
    let bigTri: any = -1
    for (let i = 0; i < sortedSticks.length - 2; i++) {
      for (let j = i + 1; j < sortedSticks.length - 1; j++) {
        for (let k = j + 1; k < sortedSticks.length; k++) {
          const triangle = [sortedSticks[i], sortedSticks[j], sortedSticks[k]]
          const validTriangle = isValidTriangle(triangle)
          if (
            triangle[0] + triangle[1] + triangle[2] > perimiter &&
            validTriangle
          ) {
            perimiter = triangle[0] + triangle[1] + triangle[2]
            bigTri = triangle
          }
        }
      }
    }
    return bigTri === -1 ? [-1] : bigTri.reverse()
  }

  // /**
  //  * @name
  //  * @description
  //  * [Original challenge]()
  //  *
  //  * @param
  //  * @returns
  //  */
  // static(): {}

  // /**
  //  * @name
  //  * @description
  //  * [Original challenge]()
  //  *
  //  * @param
  //  * @returns
  //  */
  // static(): {}

  // /**
  //  * @name
  //  * @description
  //  * [Original challenge]()
  //  *
  //  * @param
  //  * @returns
  //  */
  // static(): {}
}

export default GreedyAlgorithms
