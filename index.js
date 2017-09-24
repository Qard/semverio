const request = require('got')

async function get(name, fragment) {
  const url = `https://semver.io/${name}${fragment}`
  const { body, status } = await request(url)
  if (status >= 400) {
    throw new Error(`Unable to reach semverio`)
  }
  return body
}

class Service {
  constructor(name) {
    this.name = name
  }

  resolve(range) {
    return get(this.name, `/resolve/${range}`)
  }

  stable() {
    return get(this.name, '/stable')
  }

  unstable() {
    return get(this.name, '/unstable')
  }

  async json() {
    return JSON.parse(await get(this.name, '.json'))
  }
}

module.exports = new Proxy({}, {
  get(target, name) {
    if (!target[name]) {
      target[name] = new Service(name)
    }
    return target[name]
  }
})
