const path = require('path')
const { writeFile } = require('fs').promises
const packageJson = require('../package.json')

const currentVersion = packageJson.version.split('.')
const patchVersion = parseInt(currentVersion[2], 10)
const bumpedVersion = `${currentVersion[0]}.${
  currentVersion[1]
}.${patchVersion + 1}`

packageJson.version = bumpedVersion

writeFile(
  path.join(__dirname, '../package.json'),
  JSON.stringify(packageJson, undefined, 2)
)
  .then(() => console.log(`Bumped version to ${bumpedVersion}`))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })