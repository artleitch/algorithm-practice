require('source-map-support').install()
const {
  WarmUpChallenges,
} = require('./modules/warm-up-challenges/warm-up-challenges')
const { module02 } = require('./modules/module02/module02')

exports.jsGym = {
  warmUpChallenges: new WarmUpChallenges(),
  module02,
}
export {}
