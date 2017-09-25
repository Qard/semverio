# semverio

This is a simple client for semver.io, which allows getting current stable and
unstable versions of node.js and several other things. It also allows finding
a version that matches a semver range, much like you can do with npm packages.

## Install

```sh
npm install semverio
```

## Usage

```js
const semverio = require('semverio')

async function main() {
  const [ node, mongodb, nginx, npm ] = await Promise.all([
    semverio.node.stable(),
    semverio.mongodb.unstable(),
    semver.nginx.resolve('~1.11'),
    semverio.npm.json()
  ])

  console.log({
    node,
    mongodb,
    nginx,
    npm
  })
}

main()
```

---

### Copyright (c) 2017 Stephen Belanger

#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
