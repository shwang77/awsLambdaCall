function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function resolve (cur, ns) {
  var undef
  ns = ns.split('.')
  while (cur && ns[0]) { cur = cur[ns.shift()] || undef }
  return cur
}

const constants = require('./constants')
function getConstantText (value) {
  return resolve(constants, value)
}

module.exports.getConstantText = getConstantText
module.exports.isNumeric = isNumeric
