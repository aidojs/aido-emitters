/**
 * Plugin factory
 * @param {Object}   utils      - Aido utils which can be used by the plugin
 * @param {Function} utils.emitSlash
 * @param {Function} utils.emitAction
 */
function pluginFactory(koa, utils) {
  const { emitSlash, emitAction } = utils

  function slashFactory(oldSlash) {
    class Slash extends oldSlash {
      emitSlash(...args) {
        emitSlash(...args)
      }
      emitAction(...args) {
        emitAction(...args)
      }
    }

    return Slash
  }

  return {
    name: 'emitters',
    slashFactory,
  }
}

module.exports = pluginFactory
