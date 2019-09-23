import _debug from 'debug'
import fs from 'fs'
import path from 'path'

const debug = _debug('rollup-plugin-resolve-aliases')

export default ({aliases, mainFields}) => {
  mainFields = mainFields || ['module', 'main']
  return {
    name: 'resolve-aliases',

    resolveId (importee, importer) {
      // Make absolute
      if (importee.charAt(0) === '.') {
        importee = path.resolve(importer, '..', importee)
      }
      let alias = aliases[importee]
      if (alias == null) {
        return
      }
      if (fs.statSync(alias).isDirectory()) {
        const pkg = require(path.join(alias, 'package.json'))
        const main = mainFields.reduce(
          (res, key) => res || pkg[key],
          null
        ) || 'index.js'
        debug(`Main for ${importee} is ${main}`)
        alias = path.join(alias, main)
      }
      debug(`Aliasing ${importee} to ${alias}`)
      return alias
    }
  }
}
