/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
let { isNumeric } = require('./utils.js')

let chai = require('chai')
let expect = chai.expect

describe('# Utils', () => {
  describe('# isNumeric', () => {
    it('should return false for a string', () => {
      expect(isNumeric('abc')).to.be.false
    })
  })
})
/* eslint-enable no-unused-expressions */
