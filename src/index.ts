require('source-map-support').install()
const {
  warmUpChallenges,
} = require('./modules/warm-up-challenges/warm-up-challenges')
const { module02 } = require('./modules/module02/module02')

exports.jsGym = {
  warmUpChallenges,
  module02,
}
export {}
