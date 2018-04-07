module.exports.routes = {
  "GET /aliases": "AliasController.find",
  "POST /aliases": "AliasController.create",
  "GET /go/:aliasKey": "AliasResolverController.go"
}
