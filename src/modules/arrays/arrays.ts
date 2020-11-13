/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class Arrays {
  /**
   * @name ds2DArray
   * @description
   * Given a 2D array, find the total of all hourglass shapes within the 2D
   * array
   *
   * [Original challenge](https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays)
   *
   * @param arr The 2D array
   * @returns Total of all hourglass shapes within the 2D array
   */
  static ds2DArray(arr: number[][]): number {
    function getHourGlassTotal(tempArr: number[][], start) {
      const val1 = tempArr[start[0]][start[1]]
      const val2 = tempArr[start[0]][start[1] + 1]
      const val3 = tempArr[start[0]][start[1] + 2]
      const val4 = tempArr[start[0] + 1][start[1] + 1]
      const val5 = tempArr[start[0] + 2][start[1]]
      const val6 = tempArr[start[0] + 2][start[1] + 1]
      const val7 = tempArr[start[0] + 2][start[1] + 2]
      const hourGlass = val1 + val2 + val3 + val4 + val5 + val6 + val7
      return hourGlass
    }

    const startingArrays: number[][] = []
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const newEl = [i, j]
        startingArrays.push(newEl)
      }
    }
    return startingArrays.reduce((acc, el) => {
      // get value for this hourglass
      const hourGlassTotal = getHourGlassTotal(arr, el)
      // update max
      return Math.max(acc, hourGlassTotal)
    }, -Infinity)
  }

  static leftRotation(): boolean {
    return true
  }

  static newYearChaos(): boolean {
    return true
  }

  static minimumSwaps2(): boolean {
    return true
  }

  static arrayManipulation(): boolean {
    return true
  }
}

export default Arrays
