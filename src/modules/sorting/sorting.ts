/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class Sorting {
  /**
   * @name bubbleSort
   * @description
   * Given an array of integers, sort the array in ascending order using the
   * Bubble Sort algorithm above. Once sorted, print the following three lines:
   * 'Array is sorted in numSwaps swaps.', where numSwaps is the number of swaps
   * that took place.
   * First Element: firstElement, where 'First Element' is the first element in
   * the sorted array.
   * Last Element: lastElement, where 'Last Element' is the last element in the
   * sorted array.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting)
   *
   * @param a The array of numbers to sort
   * @returns Total number of swaps made in sorting
   */
  static bubbleSort(a: number[]): number {
    const n = a.length
    let swaps = 0
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
          const tempVal = a[j]
          a[j] = a[j + 1]
          a[j + 1] = tempVal
          swaps++
        }
      }
    }
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)
    return swaps
  }

  /**
   * @name bubbleSort
   * @description
   * Mark and Jane are very happy after having their first child. Their son
   * loves toys, so Mark wants to buy some. There are a number of different toys
   *  lying in front of him, tagged with their prices. Mark has only a certain
   * amount to spend, and he wants to maximize the number of toys he buys with
   * this money.
   *
   * Given a list of prices and an amount to spend, what is the maximum number
   * of toys Mark can buy?
   *
   * [Original challenge](https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen)
   *
   * @param prices The array of prices to select from
   * @param k The amount of money Mark has to spend
   * @returns The number of toys Mark can buy
   */
  static markAndToys(prices: number[], k: number): number {
    const sortedToys = prices.slice().sort((a, b) => {
      return a - b
    })
    let acc = 0
    let toysToPurchase = 0
    for (let i = 0; i < sortedToys.length; i++) {
      acc += +sortedToys[i]
      if (acc > k) {
        toysToPurchase = i
        break
      }
      if (i === sortedToys.length - 1 && acc <= k) {
        toysToPurchase = sortedToys.length
        break
      }
    }
    return toysToPurchase
  }
}

export default Sorting
