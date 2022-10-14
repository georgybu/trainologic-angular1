/**
 * @class NodeViewModel
 */
class NodeViewModel {
  constructor () {
    /**
     * @type {number}
     */
    this.id = null
    /**
     * @type {string}
     */
    this.title = ''
    /**
     * @type {Array.<NodeViewModel>}
     */
    this.nodes = []
    /**
     * @type {boolean}
     */
    this.hasNodes = false
  }
}

export default NodeViewModel
