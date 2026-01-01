const hasFlag = require("./index")

const mockArgv = ["-f", "--enterprise", "--foo=bar", "--", "--rainbow"]

const run = (label, flag, expected) => {
  const result = hasFlag(flag, mockArgv)
  const status = result === expected ? "✅" : "❌"
  console.log(`${status} ${label}: ${result}`)
}

console.log("Running has-argv-flag tests...")
run("Finds 'enterprise' (auto-prefix)", "enterprise", true)
run("Finds '--enterprise' (manual prefix)", "--enterprise", true)
run("Finds 'f' (short flag auto-prefix)", "f", true)
run("Finds '-f' (short flag manual prefix)", "-f", true)
run("Finds 'foo=bar' (exact match)", "foo=bar", true)
run("Fails 'foo' (partial match)", "foo", false)
run("Fails 'rainbow' (after terminator)", "rainbow", false)