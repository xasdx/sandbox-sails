module.exports = (data, options) => {

  let req = this.req
  let res = this.res
  let sails = req._sails

  res.status(404)

  sails.log.verbose("Sending 404 ('Not Found') response.")

  return res.jsonx(data)
}
