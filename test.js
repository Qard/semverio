const tap = require('tap')
const semver = require('semver')
const semverio = require('./')

const services = [
  'node',
  'iojs',
  'npm',
  'yarn',
  'nginx',
  'mongodb'
]

tap.test('json', async t => {
  for (let name of services) {
    const json = await semverio[name].json()
    const matcher = /^\d+\.\d+\.\d+(-.*)?/
    t.match(json, {
      stable: matcher,
      unstable: matcher,
      all: [ matcher ]
    })
  }
})

tap.test('stable', async t => {
  for (let name of services) {
    const resolved = await semverio[name].stable()
    t.ok(semver.valid(resolved), 'resolved version is valid')
  }
})

tap.test('unstable', async t => {
  for (let name of services) {
    const resolved = await semverio[name].unstable()
    t.ok(semver.valid(resolved), 'resolved version is valid')
  }
})

tap.test('resolve', async t => {
  const tests = [
    ['node', '6', '6.11.3'],
    ['iojs', '3', '3.3.1'],
    ['npm', '3', '3.10.10'],
    ['yarn', '0', '0.28.4'],
    ['nginx', '~1.11', '1.11.13'],
    ['mongodb', '2', '2.7.8']
  ]

  for (let [name, range, version] of tests) {
    const resolved = await semverio[name].resolve(range)
    t.ok(semver.valid(resolved), 'resolved version is valid')
    t.equal(resolved, version, 'matches expected version')
  }
})
