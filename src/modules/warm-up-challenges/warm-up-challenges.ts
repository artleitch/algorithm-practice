require('source-map-support').install()

/**
 * Warm up challenges
 */
export class WarmUpChallenges {
  //https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
  /**
   * @param length How long the array is
   * @param socks  Array of numbers
   * @returns number of matches in array of numbers
   */
  static salesByMatch(length: number, socks: number[]): number {
    const numOfSocks = socks.reduce((acc, e) => {
      acc[e] = acc[e] ? acc[e] + 1 : 1
      return acc
    }, {})
    return Object.keys(numOfSocks).reduce((acc, e) => {
      acc +=
        numOfSocks[e] % 2 === 0 ? numOfSocks[e] / 2 : (numOfSocks[e] - 1) / 2
      return acc
    }, 0)
  }
  static alg02() {}
  static alg03() {}
  static alg04() {}
  static alg05() {}
}
