const Array = require('./Array')
const Clone = require('./Clone')
const Date = require('./Date')
const Dom = require('./Dom')
const Draw = require('./Draw')
const Format = require('./Format')
const Function = require('./Function')
const Keycode = require('./Keycode')
const Number = require('./Number')
const Password = require('./Password')
const Random = require('./Random')
const Regexp = require('./Regexp')
const String = require('./String')
const Type = require('./Type')
const Ua = require('./Ua')
const Url = require('./Url')

const API = {
  ...Array,
  ...Clone,
  ...Date,
  ...Dom,
  ...Draw,
  ...Format,
  ...Function,
  ...Keycode,
  ...Number,
  ...Password,
  ...Random,
  regexp:Regexp,
  ...String,
  ...Type,
  ...Ua,
  ...Url
}

module.exports.default = module.exports = API
