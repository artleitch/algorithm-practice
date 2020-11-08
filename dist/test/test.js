const assert = require('assert');
const { jsGym } = require('../src/index');
const jsGymObj = new jsGym();
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            const result = jsGymObj.algorithmOne(1, 2);
            assert.equal(result, 3);
        });
    });
});
//# sourceMappingURL=test.js.map