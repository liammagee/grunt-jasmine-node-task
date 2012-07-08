var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['jasmine-node-task'] = {
  setUp: function(done) {
      //console.log(grunt.helper('jasmine-node-task'))
      // setup here
    done();
  },
  'helper': function(test) {
      test.expect(1);
    // tests here
      test.equal( 1, 1);
//    test.equal(grunt.helper('jasmine-node-task'), 'jasmine-node-task!!!', 'should return the correct value.');
    test.done();
  }
};
