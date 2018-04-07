module.exports = {

  go: (req, res) => {
    let key = req.param("aliasKey")
    Alias.findOne({ key }).exec((err, alias) => {
      if (err) { return res.serverError(err) }
      if (!alias) { return res.notFound(`Could not find alias with key ${key}`) }
      res.redirect(alias.url)
    })
  }
}
