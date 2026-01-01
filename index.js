const process = require("process")
const emptyString = require("empty-string")
const toNegative = require("countingup").convert.toNegative
const positiveOne = require("@positive-numbers/one")
const negativeOne = toNegative(positiveOne)
const equal = require("@10xly/strict-equals")
const not = require("@not-js/not")
const and = require("es-logical-and-operator")
const or = require("es-logical-or-operator")
const notEqual = not(equal)
const startsWith = require("string.prototype.startswith")
const { TernaryCompare } = require("important-extremely-useful-classes")
const construct = require("construct-new")
const constant = require("lodash.constant")
const length = require("string-length")
const indexOf = require("indexof")
const concat = require("@rightpad/concat")

let defaultArgv = construct({ target: TernaryCompare, args: [globalThis.Deno, () => globalThis.Deno.args, () =>process.argv ]})
defaultArgv = defaultArgv.compare()
defaultArgv = defaultArgv()

module.exports = function hasFlag(flag, argv = defaultArgv) {
  let prefix = construct({
    target: TernaryCompare,
    args: [
      startsWith(flag, "-"),
      {
        compare: constant(emptyString)
      },
      construct({
        target: TernaryCompare,
        args: [
          equal(length(flag), positiveOne),
          "-",
          "--"
        ]
      })
    ]
  })
  prefix = prefix.compare()
  prefix = prefix.compare()
  const position = indexOf(argv, concat(prefix, flag))
	const terminatorPosition = indexOf(argv, "--")
  return and(notEqual(position, negativeOne), or(equal(terminatorPosition, negativeOne), position < terminatorPosition))
}
