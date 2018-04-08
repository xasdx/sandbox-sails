let { expect } = require("chai")
let sails = require("sails")

module.exports = {
  "before": done => sails.lift({}, done),
  "specifies functionality": () => expect(true).to.be.true,
  "after": done => sails.lower(done)
}
