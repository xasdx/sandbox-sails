module.exports = {
  
  find: (req, res) => res.json([]),

  create: (req, res) => {
    let id = IdentifierService.nextIdentifier()
    res.json({ id, url: "" })
  }
}
