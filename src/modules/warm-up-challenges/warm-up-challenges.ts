require('source-map-support').install()

exports.warmUpChallenges = {
  //https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
  salesByMatch: (length: number, socks: number[]): number => {
    const numOfSocks = socks.reduce((acc, e) => {
      acc[e] = acc[e] ? acc[e] + 1 : 1
      return acc
    }, {})
    return Object.keys(numOfSocks).reduce((acc, e) => {
      acc +=
        numOfSocks[e] % 2 === 0 ? numOfSocks[e] / 2 : (numOfSocks[e] - 1) / 2
      return acc
    }, 0)
  },
  alg02: () => {},
  alg03: () => {},
  alg04: () => {},
  alg05: () => {},
}
