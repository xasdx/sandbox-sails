module.exports = (data, options) => {

  let req = this.req
  let res = this.res
  let sails = req._sails

  res.status(500)

  sails.log.error("Sending 500 ('Server Error') response.")

  return res.jsonx(data)
}
