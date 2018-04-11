let { get, expect, wait } = require("chakram")
let sails = require("sails")

module.exports = {
  "before": done => sails.lift({}, done),
  "returns aliases": () => {
    let res = get("http://localhost:8080/aliases")
    expect(res).to.have.status(200)
    expect(res).to.have.schema({ "type": "array" })
    return wait()
  },
  "after": done => sails.lower(done)
}
