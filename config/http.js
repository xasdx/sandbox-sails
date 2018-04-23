let logRequest = (req, res, next) => {
  sails.log.info(`${req.method} ${req.originalUrl}`)
  next()
}

module.exports.http = {
  middleware: {
    logRequest,
    order: [
      "logRequest",
      "cookieParser",
      "session",
      "bodyParser",
      "compress",
      "router",
      "www"
    ]
  }
}
