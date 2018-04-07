module.exports = (data, options) => {

  let req = this.req
  let res = this.res
  let sails = req._sails

  sails.log.silly("res.ok() :: Sending 200 ('OK') response")

  res.status(200)
  
  return res.jsonx(data)
}
