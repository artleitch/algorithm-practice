// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

class WarmUpChallenges {
  /**
   * @name salesByMatch
   * @description
   * Find the number of pairs of numbers in an array
   *
   * [Original challenge](https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
   *
   * @param length How long the array is
   * @param socks  Array of numbers to match
   * @returns Number of matches in array of numbers
   */
  static salesByMatch(length: number, socks: number[]): number {
    const numOfSocks = socks.reduce((acc, e) => {
      acc[e] = acc[e] ? acc[e] + 1 : 1
      return acc
    }, {})
    return Object.keys(numOfSocks).reduce((acc, e) => {
      const returnVal =
        acc +
        (numOfSocks[e] % 2 === 0 ? numOfSocks[e] / 2 : (numOfSocks[e] - 1) / 2)
      return returnVal
    }, 0)
  }

  /**
   * @name countingValleys
   * @description
   * Given an string of 'D' and 'U' representing a movement of down and up
   * respectively, find the number of valleys in the array
   *
   * [Original challenge](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
   *
   * @param length How long the array is
   * @param movements  String of movements, given as 'D' and 'U'
   * @returns Number of valleys in array of movements
   */
  static countingValleys(length: number, movements: string): number {
    let counter = 0
    return movements.split('').reduce((acc, e) => {
      counter += e === 'D' ? -1 : 1
      if (counter === 0 && e === 'U') return acc + 1
      return acc
    }, 0)
  }

  /**
   * @name jumpingOnTheClouds
   * @description
   * Emma is playing a new mobile game that starts with consecutively numbered
   * clouds. Some of the clouds are thunderheads and others are cumulus. She can
   *  jump on any cumulus cloud having a number that is equal to the number of
   * the current cloud plus 1 or 2. She must avoid the thunderheads. Determine
   * the minimum number of jumps it will take Emma to jump from her starting
   * postion to the last cloud. It is always possible to win the game.
   * For each game, Emma will get an array of clouds numbered 0 if they are safe
   *  or 1 if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0]
   * indexed from 0 … 6. The number on each cloud is its index in the list so
   * she must avoid the clouds at indexes 1 and 5. She could follow the
   * following two paths: 0 > 2 > 4 > 6 or 0 > 2 > 3 > 4 > 6. The first path
   * takes 3 jumps while the second takes 4.
   * jumpingOnClouds should return the minimum number of jumps required, as an
   * integer.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)
   *
   * @param clouds An array of binary integers, representing clouds
   * @returns Minimum number of jumps needed
   */
  static jumpingOnTheClouds(clouds: number[]): number {
    let skip = false
    return clouds.reduce((acc, e, i, arr) => {
      let returnVal = acc
      // if on last element, return acc
      if (i === arr.length - 1) return returnVal
      if (skip) {
        skip = false
        return returnVal
      }
      returnVal += 1
      if (arr[i + 2] === undefined) return returnVal
      if (arr[i + 2] === 0) skip = true
      return returnVal
    }, 0)
  }

  /**
   * @name jumpingOnTheClouds
   * @description
   * Lilah has a string, s, of lowercase English letters that she repeated
   * infinitely many times.
   * Given an integer, n, find and print the number of letter a's in the first
   * n letters of Lilah's infinite string.
   * For example, if the string s = ‘abcac’ and n=10, the substring we consider
   * is abcacabcac, the first 10 characters of her infinite string. There are 4
   * occurrences of a in the substring.
   *
   * [Original challenge](https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup)
   *
   * @param string The base string to use
   * @param n The length of characters to consider
   * @returns Number of occurances of 'a'
   */
  static repeatedString(string: string, n: number): number {
    const numAInS = string.split('').reduce((acc, e) => {
      let returnVal = acc
      if (e === 'a') returnVal += 1
      return returnVal
    }, 0)
    const numOfFullS = Math.floor(n / string.length)
    const leftover = n % string.length
    const splitString = string.slice(0, leftover)
    const numAInSubstring = splitString.split('').reduce((acc, e) => {
      let returnVal = acc
      if (e === 'a') returnVal += 1
      return returnVal
    }, 0)
    return numAInS * numOfFullS + numAInSubstring
  }
}

export default WarmUpChallenges
