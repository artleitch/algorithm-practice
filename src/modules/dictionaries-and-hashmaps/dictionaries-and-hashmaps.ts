/* eslint-disable no-plusplus */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class DictionariesAndHashmaps {
  /**
   * @name countTriplets
   * @description
   * Complete the countTriplets function in the editor below. It should return
   * the number of triplets forming a geometric progression for a given r as an
   * integer.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps)
   *
   * @param arr Array of integers
   * @param r  an integer, the common ratio
   * @returns Number of geometric progression triplets
   */
  static countTriplets(arr: number[], r: number): number {
    if (arr.length <= 2) return 0
    const mapArr: number[] = []
    const mapDoubles: number[][] = []
    let count = 0

    for (let i = arr.length; i >= 0; i--) {
      const rI = r * arr[i]
      const rRI = r * r * arr[i]

      if (!mapDoubles[arr[i]]) mapDoubles[arr[i]] = []
      if (!mapDoubles[arr[i]][rI]) mapDoubles[arr[i]][rI] = 0
      if (!mapDoubles[rI]) mapDoubles[rI] = []
      if (!mapArr[arr[i]]) mapArr[arr[i]] = 0

      count += mapDoubles[rI][rRI] || 0

      mapDoubles[arr[i]][rI] += mapArr[rI]
      mapArr[arr[i]] += +1
    }

    return count
  }
}

export default DictionariesAndHashmaps
