module.exports = (data, options) => {

  let req = this.req
  let res = this.res
  let sails = req._sails

  res.status(400)

  sails.log.verbose("Sending 400 ('Bad Request') response.")

  return res.jsonx(data)
}
