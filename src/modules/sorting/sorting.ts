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
   * @returns Total of all hourglass shapes within the 2D array
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
}

export default Sorting
