module.exports = (data, options) => {

  let req = this.req
  let res = this.res
  let sails = req._sails

  sails.log.silly("res.created() :: Sending 201 ('CREATED') response")

  res.status(201)

  return res.jsonx(data)
}
