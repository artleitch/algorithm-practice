import module02 from './modules/module02/module02'
import WarmUpChallenges from './modules/warm-up-challenges/warm-up-challenges'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install()

const jsGym = {
  warmUpChallenges: WarmUpChallenges,
  module02,
}

export default jsGym
