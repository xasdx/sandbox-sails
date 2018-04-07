module.exports = {
  
  find: (req, res) => Alias.find({}).exec((err, aliases) => {
    if (err) { return res.serverError(err) }
    res.json(aliases)
  }),

  create: (req, res) => {
    let aliasKey = req.body.key || IdentifierService.nextIdentifier()
    Alias.create({
      key: aliasKey,
      url: req.body.url
    }).exec((err, alias) => {
      if (err) { return res.serverError(err) }
      res.created(alias)
    })
  }
}
