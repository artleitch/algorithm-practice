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
   * @name markAndToys
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

  /**
   * @name fraudulentActivitiyNotifications
   * @description
   * HackerLand National Bank has a simple policy for warning clients about
   * possible fraudulent account activity. If the amount spent by a client on a
   * particular day is greater than or equal to 2x the client's median spending
   * for a trailing number of days, they send the client a notification about
   * potential fraud. The bank doesn't send the client any notifications until
   * they have at least that trailing number of prior days' transaction data.
   *
   * Given the number of trailing days d and a client's total daily expenditures
   * for a period of n days, find and print the number of times the client will
   * receive a notification over all days
   *
   * [Original challenge](https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen)
   *
   * @param expenditure An array of daily expenditures
   * @param d The number of trailing days to calculate median from
   * @returns The number of days that an alert is sent
   */
  static fraudulentActivitiyNotifications(
    expenditure: number[],
    d: number
  ): number {
    function findLoc(el, arr, st, en) {
      st = st || 0
      en = en || arr.length
      const pivot = parseInt(st + (en - st) / 2, 10)
      if (en - st <= 1 || +arr[pivot] === +el) return pivot
      if (+arr[pivot] < +el) {
        return findLoc(+el, arr, pivot, en)
      }
      return findLoc(+el, arr, st, pivot)
    }

    function addToArray(arr, el) {
      arr.splice(findLoc(+el, arr, 0, arr.length) + 1, 0, el)
      return arr
    }

    function removeFromArray(arr, el) {
      arr.splice(arr.indexOf(+el), 1)
      return arr
    }

    let median = 0
    let notifications = 0
    const rollingArray = []
    for (let i = 0; i < expenditure.length; i++) {
      addToArray(rollingArray, expenditure[i])
      if (i >= d) {
        // is there a way to sort once?
        if (d % 2 === 0) {
          median = (rollingArray[d / 2] + rollingArray[d / 2 - 1]) / 2
        } else {
          median = rollingArray[(d - 1) / 2]
        }
        if (expenditure[i] >= median * 2) notifications++
        removeFromArray(rollingArray, expenditure[i - d])
      }
    }
    return notifications
  }
}

export default Sorting
