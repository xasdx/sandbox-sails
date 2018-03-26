module.exports.routes = {
  "/": { view: "homepage" },
  "GET /heroes": "HeroController.getHeroes"
}
