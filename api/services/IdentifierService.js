let generateUUID = require("uuid/v4")

module.exports = {
  
  nextIdentifier: (options) => {
    let uuid = generateUUID()
    return uuid.replace(/-/g, "")
  }
}
