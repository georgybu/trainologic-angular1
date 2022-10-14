import NodeViewModel from './NodeViewModel'

/**
 * @class NodeController
 * @implements TreeOutput
 */
class NodeController {
  constructor () {
    /**
     * @type {TreeInput}
     */
    this.inputPort = null
    /**
     * @type {NodeViewModel}
     */
    this.node = null
  }

  toggle () {
    if (this.node.nodes.length > 0) {
      return this.removeTree()
    }

    this.inputPort.getTree(this.node.id, this)
  }

  removeTree () {
    this.node.nodes = []
  }

  init () {
    if (this.node === null) {
      this.node = new NodeViewModel()

      this.inputPort.getTree(null, this)
    }
  }
}

NodeController.prototype.presentTree = function (response) {
  for (let i = 0; i < response.tree.length; i++) {
    this.node.nodes.push(response.tree[i])
  }
}

export default NodeController
