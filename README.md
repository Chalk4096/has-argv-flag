# has-argv-flag 
> Check if [`argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv) has a specific flag

Correctly stops looking after an `--` argument terminator.

## Install

```
$ npm install has-argv-flag
```


## Usage

```js
// foo.js
const hasFlag = require('has-argv-flag');

hasFlag('enterprise');
//=> true

hasFlag('--enterprise');
//=> true

hasFlag('f');
//=> true

hasFlag('-f');
//=> true

hasFlag('foo=bar');
//=> true

hasFlag('foo');
//=> false

hasFlag('rainbow');
//=> false
```
with:
```
$ node foo.js -f --enterprise --foo=bar -- --rainbow
```


## API

### hasFlag(flag, [argv])

Returns a boolean for whether the flag exists.

#### flag

Type: `string`

CLI flag to look for. The `--` prefix is optional.

#### argv

Type: `string[]`<br>
Default: `process.argv`

CLI arguments.

## Tests
do git clone and run npm test for tests.